const template = (state, action) => {
	switch(action.type) {
		case "CREATE_TEMPLATE":
			return {
				uuid: action.uuid,
				title: action.title,
				content: action.content,
			};
		default:
			return state;
	}
};

export default (state = [], action) => {
	switch(action.type) {
		case "CREATE_TEMPLATE":
			return [
				...state,
				template(undefined, action),
			];
		case "CLEAR_TEMPLATES":
			return [];
		default:
			return state;
	}
};
