const template = (state, action) => {
	switch(action.type) {
		case "CREATE_TEMPLATE":
			return {
				uuid: action.uuid,
				title: action.title,
				content: action.content,
			};
		case "UPDATE_TEMPLATE":
			if(state.uuid !== action.uuid) {
				return state;
			}
			return {
				...state,
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
		case "UPDATE_TEMPLATE":
			return state.map(e => template(e, action));
		case "DESTROY_TEMPLATE":
			return state.filter(e => e.uuid !== action.uuid);
		case "CLEAR_TEMPLATES":
			return [];
		default:
			return state;
	}
};
