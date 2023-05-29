import { combineReducers } from "redux";
import postReducer from "./posts";
import commentReducer from "./comments";
import userReducer from "./users";

const rootReducer = combineReducers({
	postReducer,
	commentReducer,
	userReducer,
});

export default rootReducer;
