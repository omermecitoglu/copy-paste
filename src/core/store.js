import { createStore } from "redux";
import reducers from "~/reducers";
import { loadState, saveState } from "./storage";
import throttle from "lodash/throttle";

const persistedState = loadState();

const store = createStore(
	reducers,
	persistedState,
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 1000));

export default store;
