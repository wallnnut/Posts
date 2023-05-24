import { put, call, takeLeading } from "redux-saga/effects";
import { setComments } from "../actions";
import { GET_COMMENTS } from "../constants";
import { comments } from "../../api/comments";

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));

export function* commentWorker(action: any): any {
	const data = yield call(comments.get, action.id);
	yield delay(1);
	yield put(setComments(data));
}

export function* commentWatcher(): any {
	yield takeLeading(GET_COMMENTS, commentWorker);
}
