import { IAction, IPost } from "./../../types/index";
import { GET_POSTS, SET_POSTS } from "../constants";

interface IInit {
	posts: [] | [IPost];
	postLoaded: boolean;
}

export const initialState: IInit = {
	posts: [],
	postLoaded: false,
};

const postReducer = (
	state: IInit = initialState,
	{ type, payload }: IAction
) => {
	switch (type) {
		case GET_POSTS:
			return state;
		case SET_POSTS:
			return {
				...state,
				posts: [...state.posts, ...payload],
				postLoaded: true,
			};
		default:
			return state;
	}
};

export default postReducer;
