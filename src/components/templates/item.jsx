import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import UseButton from "./actions/use";

const Template = ({ title, content }) => (
	<TableRow>
		<TableCell component="th" scope="row">{title}</TableCell>
		<TableCell align="right">
			<UseButton title={title} content={content} />
		</TableCell>
	</TableRow>
);

export default Template;
