import React from "react";
import { Container } from "@material-ui/core";
import NewTemplate from "./templates/new";
import TemplatesList from "./templates/list";

const App = () => (
	<Container>
		<NewTemplate />
		<TemplatesList />
	</Container>
);

export default App;
