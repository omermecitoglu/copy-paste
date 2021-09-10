import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "~/actions/templates";
import { Button, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

function Update({ uuid, title, content, confirm }) {

	const [values, setValues] = useState({
		open: false,
		title,
		content,
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
		setValues({ ...values, open: false });
		confirm(uuid, values.title, values.content);
	};

	return (
		<span>
			<IconButton aria-label="edit" onClick={handleClickOpen}>
				<EditIcon />
			</IconButton>
			<Dialog
				open={values.open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Edit Template</DialogTitle>
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
					<Button onClick={handleConfirm} color="primary">Save</Button>
					<Button onClick={handleClose} color="default" autoFocus>Cancel</Button>
				</DialogActions>
			</Dialog>
		</span>
	);
}

const mdtp = (dispatch) => ({
	confirm: (uuid, title, content) => {
		dispatch(actions.update(uuid, title, content));
	},
});

export default connect(null, mdtp)(Update);
