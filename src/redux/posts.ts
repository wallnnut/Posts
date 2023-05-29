import { IPost } from "../types";
import { takeEvery, put, call } from "redux-saga/effects";
import { posts } from "../api/posts";

// ================================CONSTANTS=================================
export const GET_POSTS = "GET_POSTS" as const;
export const SET_POSTS = "SET_POSTS" as const;

// ================================ACTIONS===================================
type ActionTypes = ReturnType<typeof getPosts> | ReturnType<typeof setPosts>;
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

// ================================REDUCERS===================================

interface IState {
	posts: [] | IPost[];
	postLoaded: boolean;
}

const initialState: IState = {
	posts: [],
	postLoaded: false,
};

const post = (state: IState = initialState, { type, payload }: ActionTypes) => {
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

export default post;

// =================================SAGAS=====================================

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));
export function* postWorker(): any {
	const data = yield call(posts.get);
	yield delay(1);
	yield put(setPosts(data));
}

export function* postWatcher() {
	yield takeEvery(GET_POSTS, postWorker);
}
