import React from "react";
import { connect } from "react-redux";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@material-ui/core";
import Template from "./item";

const List = ({ templates }) => (
	<TableContainer component={Paper}>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell className="dark-table-header">Title</TableCell>
					<TableCell className="dark-table-header" align="right">&nbsp;</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{templates.map(template => (
					<Template key={template.uuid} {...template} />
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

const mstp = ({ templates }) => ({
	templates,
});

export default connect(mstp, null)(List);
