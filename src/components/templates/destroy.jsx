import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "~/actions/templates";
import { Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function Destroy({ uuid, confirm }) {

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleConfirm = () => {
		setOpen(false);
		confirm(uuid);
	};

	return (
		<span>
			<IconButton color="secondary" onClick={handleClickOpen} aria-label="delete">
				<DeleteIcon />
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Destroy Template</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Do you really want to destroy this template?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleConfirm} color="secondary">Destroy</Button>
					<Button onClick={handleClose} color="default" autoFocus>Cancel</Button>
				</DialogActions>
			</Dialog>
		</span>
	);
}

const mdtp = (dispatch) => ({
	confirm: (uuid) => {
		dispatch(actions.destroy(uuid));
	},
});

export default connect(null, mdtp)(Destroy);
