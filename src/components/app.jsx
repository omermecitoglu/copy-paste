import React from "react";
import { Container } from "@material-ui/core";
import NewTemplate from "./templates/new";
import TemplatesList from "./templates/list";
import "./app.css";

const App = () => (
	<Container>
		<div className="app-header">
			<NewTemplate />
		</div>
		<TemplatesList />
	</Container>
);

export default App;
