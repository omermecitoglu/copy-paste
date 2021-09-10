import { v4 as uuidv4 } from "uuid";

export default {
	create: (title, content) => ({
		type: "CREATE_TEMPLATE",
		uuid: uuidv4(),
		title,
		content,
	}),
	destroy: (uuid) => ({
		type: "DESTROY_TEMPLATE",
		uuid,
	}),
};
