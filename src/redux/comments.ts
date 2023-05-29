import { IComment } from "./../types/index";
import { put, call, takeLeading } from "redux-saga/effects";
import { comments } from "../api/comments";

// =============================CONSTANTS==================================

export const GET_COMMENTS = "GET_COMMENTS" as const;
export const SET_COMMENTS = "SET_COMMENTS" as const;

// =============================ACTIONS==================================
type CommentActionTypes =
	| ReturnType<typeof getComments>
	| ReturnType<typeof setComments>;

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

// =============================REDUCERS==================================

interface IState {
	comments: [] | IComment[];
	commentsLoaded: boolean;
	isLoading: boolean;
}

export const initialState: IState = {
	comments: [],
	commentsLoaded: false,
	isLoading: false,
};

const comment = (
	state: IState = initialState,
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
		default:
			return state;
	}
};

export default comment;

// =============================SAGAS==================================

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));

export function* commentWorker(action: any): any {
	const data = yield call(comments.get, action.payload);
	yield delay(1);
	yield put(setComments(data));
}

export function* commentWatcher(): any {
	yield takeLeading(GET_COMMENTS, commentWorker);
}
