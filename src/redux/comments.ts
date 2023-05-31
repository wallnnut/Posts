import { ICommentState, TError } from "../types";
import { IComment } from "../types";
import { put, call, takeLeading } from "redux-saga/effects";
import { comments } from "../api/comments";

import { changeLoadingStatus } from "./posts";

// =============================CONSTANTS==================================

export const GET_COMMENTS = "GET_COMMENTS" as const;
export const SET_COMMENTS = "SET_COMMENTS" as const;
export const SET_ERROR = "SET_ERROR" as const;

// =============================ACTIONS==================================
type CommentActionTypes =
	| ReturnType<typeof getComments>
	| ReturnType<typeof setComments>
	| ReturnType<typeof setError>;

export const getComments = (id: number) =>
	({
		type: GET_COMMENTS,
		payload: id,
	} as const);
export const setComments = (data: IComment[]) =>
	({
		type: SET_COMMENTS,
		payload: data,
	} as const);
export const setError = (error: TError) =>
	({
		type: SET_ERROR,
		payload: error,
	} as const);

// =============================REDUCERS==================================
export const initialState: ICommentState = {
	comments: [],
	commentsLoaded: false,
	isLoading: false,
	error: null,
};

const comment = (
	state: ICommentState = initialState,
	{ type, payload }: CommentActionTypes
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
		case SET_ERROR: {
			console.log(payload);
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		}
		default:
			return state;
	}
};

export default comment;

// =============================SAGAS==================================

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));

export function* commentWorker(action: any) {
	try {
		const data: IComment[] = yield call(comments.get, action.payload);
		yield delay(1);
		yield put(setComments(data));
	} catch (error) {
		yield delay(1);
		yield put(
			setError({
				message: "smth went wrong, Try later",
				id: action.payload,
			})
		);
		yield put(changeLoadingStatus(action.payload));
	}
}

export function* commentWatcher(): any {
	yield takeLeading(GET_COMMENTS, commentWorker);
}
