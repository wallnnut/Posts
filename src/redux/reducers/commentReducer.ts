import { IAction } from "./../../types/index";
import { IComment } from "../../types";
import { GET_COMMENTS, SET_COMMENTS } from "../constants";

interface IInit {
	comments: [] | [IComment];
	commentsLoaded: boolean;
	isLoading: boolean;
}

export const initialState: IInit = {
	comments: [],
	commentsLoaded: false,
	isLoading: false,
};

const commentReducer = (
	state: IInit = initialState,
	{ type, payload }: IAction
) => {
	switch (type) {
		case GET_COMMENTS:
			return { ...state, isLoading: true };
		case SET_COMMENTS:
			return {
				...state,
				comments: [...state.comments, ...payload],
				commentsLoaded: true,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default commentReducer;
