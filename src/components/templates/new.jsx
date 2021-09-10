import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "~/actions/templates";

import { Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField } from "@material-ui/core";

const NewTemplate = ({ confirm }) => {

	const [values, setValues] = useState({
		open: false,
		title: "",
		content: "",
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickOpen = () => {
		setValues({ ...values, open: true });
	};

	const handleClose = () => {
		setValues({ ...values, open: false });
	};

	const handleConfirm = () => {
		setValues({
			...values,
			open: false,
			title: "",
			content: "",
		});
		confirm(values.title, values.content);
	};

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handleClickOpen}>New Template</Button>
			<Dialog open={values.open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">New Template</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						autoComplete="off"
						margin="dense"
						label="Title"
						type="text"
						variant="outlined"
						fullWidth
						value={values.title}
						onChange={handleChange("title")}
					/>
					<TextField
						autoComplete="off"
						margin="dense"
						label="Content"
						type="text"
						multiline
						minRows={7}
						variant="outlined"
						fullWidth
						value={values.content}
						onChange={handleChange("content")}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleConfirm} color="primary">Create</Button>
					<Button onClick={handleClose} color="default">Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const mdtp = (dispatch) => ({
	confirm: (title, content) => {
		dispatch(actions.create(title, content));
	},
});

export default connect(null, mdtp)(NewTemplate);
