import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const Template = ({ title, content }) => (
	<TableRow>
		<TableCell component="th" scope="row">{title}</TableCell>
		<TableCell align="right">
			{content}
		</TableCell>
	</TableRow>
);

export default Template;
