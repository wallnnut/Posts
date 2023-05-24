import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootWatcher } from "./sagas/rootSaga";

const sagaMiiddleware = createSagaMiddleware();

const configureStore = (preloadState: {}) =>
	createStore(
		rootReducer,
		preloadState,
		composeWithDevTools(applyMiddleware(sagaMiiddleware))
	);

const store = configureStore({});

sagaMiiddleware.run(rootWatcher);

export default store;
