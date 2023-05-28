import { user } from "./../../api/user";
import { put, call, takeEvery } from "redux-saga/effects";
import { setUser } from "../actions";
import { GET_USER } from "../constants";

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));

export function* userWorker(action: any): any {
	console.log(action);
	const data = yield call(user.get, action.id);
	yield delay(1);
	yield put(setUser(data));
}

export function* userWatcher(): any {
	yield takeEvery(GET_USER, userWorker);
}
