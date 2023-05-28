import { combineReducers } from "redux";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	postReducer,
	commentReducer,
	userReducer,
});

export default rootReducer;
