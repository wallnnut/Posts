import { IComment, IPost } from "../types";
import { takeEvery, put, call } from "redux-saga/effects";
import { posts } from "../api/posts";
import { GET_COMMENTS, SET_COMMENTS } from "./comments";

// ================================CONSTANTS=================================
export const GET_POSTS = "GET_POSTS" as const;
export const SET_POSTS = "SET_POSTS" as const;
export const CHANGE_LOADING_STATUS = "CHANGE_LOADING_STATUS" as const;
export const SET_POST_ERROR = "SET_POST_ERROR" as const;

// ================================ACTIONS===================================
type ActionTypes =
	| ReturnType<typeof getPosts>
	| ReturnType<typeof setPosts>
	| ReturnType<typeof changeLoadingStatus>
	| ReturnType<typeof setPostError>;
export const getPosts = () =>
	({
		type: GET_POSTS,
		payload: null,
	} as const);

export const setPosts = (data: IPost[]) =>
	({
		type: SET_POSTS,
		payload: data,
	} as const);

export const changeLoadingStatus = (id: number) =>
	({
		type: CHANGE_LOADING_STATUS,
		payload: id,
	} as const);
export const setPostError = (error: string) =>
	({
		type: SET_POST_ERROR,
		payload: error,
	} as const);

// ================================REDUCERS===================================

export interface IPostState {
	posts: [] | IPost[];
	postLoaded: boolean;
	error: string | null;
}

const initialState: IPostState = {
	posts: [],
	postLoaded: false,
	error: null,
};

const post = (
	state: IPostState = initialState,
	{ type, payload }: ActionTypes
) => {
	switch (type) {
		case GET_POSTS:
			return {
				...state,
			};
		case SET_POSTS:
			return {
				...state,
				posts: [
					...state.posts,
					...payload.map((post) => {
						return { ...post, commentsLoading: false };
					}),
				],
				postLoaded: true,
			};
		case CHANGE_LOADING_STATUS: {
			const modified = state.posts.map((post) =>
				post.id === payload
					? { ...post, commentsLoading: !post.commentsLoading }
					: post
			);

			return { ...state, posts: modified };
		}
		case SET_POST_ERROR: {
			return {
				...state,
				postLoaded: true,
				error: payload,
			};
		}

		default:
			return state;
	}
};

export default post;

// =================================SAGAS=====================================

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));
export function* postWorker(): any {
	try {
		const data = yield call(posts.get);
		yield delay(1);
		yield put(setPosts(data));
	} catch (error: any) {
		yield put(setPostError(error.message));
	}
}

export function* commentLoadingWorker(action: any) {
	if (action.type === SET_COMMENTS) {
		const comment = action.payload.find((el: IComment) => el.postId);
		yield put(changeLoadingStatus(comment.postId));
	} else {
		const id = action.payload;
		yield put(changeLoadingStatus(id));
	}
}

export function* postWatcher() {
	yield takeEvery(GET_POSTS, postWorker);
	yield takeEvery(GET_COMMENTS, commentLoadingWorker);
	yield takeEvery(SET_COMMENTS, commentLoadingWorker);
}
