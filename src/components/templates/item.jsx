import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import UseButton from "./use";
import EditButton from "./edit";
import DestroyButton from "./destroy";

const Template = ({ uuid, title, content }) => (
	<TableRow>
		<TableCell component="th" scope="row">{title}</TableCell>
		<TableCell align="right">
			<UseButton title={title} content={content} />
			<EditButton uuid={uuid} title={title} content={content} />
			<DestroyButton uuid={uuid} />
		</TableCell>
	</TableRow>
);

export default Template;
