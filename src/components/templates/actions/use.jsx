import React, { useState, useRef, useEffect } from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";

function getFields(content) {
	const iterators = [...content.matchAll(/<%([^%>]+)%>/g)];
	const unique = [...new Set(iterators.map(i=>i[1]))];
	return unique.map(field => ({
		name: field,
		displayName: displayName(field),
	}));
}

function displayName(field) {
	return field.split("_").map(word => capitalize(word)).join(" ");
}

function capitalize(word) {
	return word.toLowerCase().replace(/\w/, f => f.toUpperCase());
}

export default function Action({ title, content }) {

	const content_fields = getFields(content);

	const [values, setValues] = useState({
		open: false,
		fields: {},
		output: "",
	});

	const outputBox = useRef(null);

	const handleClickOpen = () => {
		setValues({ ...values, open: true });
	};

	const handleClose = () => {
		setValues({ ...values, open: false });
	};

	const handleChange = (field) => (event) => {
		setValues({
			...values,
			fields: {
				...values.fields,
				[field]: event.target.value,
			}
		});
	};

	const handleEnter = (event) => {
		if (event.keyCode === 13) {
			const form = event.target.form;
			const index = Array.prototype.indexOf.call(form, event.target);
			const target = form.elements[index + 1];
			if (target) {
				target.focus();
			}
			event.preventDefault();
		}
	};

	const handleConfirm = () => {
		setValues({
			...values,
			output: content.replace(/<%([^%>]+)%>/g, function(match,pearl,offset,string) {
				return values.fields[pearl] || "";
			}),
		});
	};

	useEffect(() => {
		if(values.output.length) {
			outputBox.current.select();
			document.execCommand("copy");
			setValues({ ...values, output: "" });
		}
	}, [values.output]);

	return (
		<span>
			<IconButton color="primary" onClick={handleClickOpen} aria-label="use">
				<FileCopyIcon />
			</IconButton>
			<Dialog open={values.open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<form>
						{content_fields.map((field, index) =>
							<TextField
								key={index}
								autoFocus={index===0}
								autoComplete="off"
								margin="dense"
								label={field.displayName}
								type="text"
								fullWidth
								value={values.fields[field.name] || ""}
								onChange={handleChange(field.name)}
								onKeyDown={handleEnter}
							/>
						)}
					</form>
					<textarea
						tabIndex={-1}
						ref={outputBox}
						value={values.output}
						onChange={console.log}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleConfirm} color="primary">Copy</Button>
					<Button onClick={handleClose} color="default">Cancel</Button>
				</DialogActions>
			</Dialog>
		</span>
	);
}
