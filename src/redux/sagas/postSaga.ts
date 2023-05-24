import { takeEvery, put, call } from "redux-saga/effects";

import { setPosts } from "../actions";
import { GET_POSTS } from "../constants";
import { posts } from "../../api/posts";

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));
export function* postWorker(): any {
	const data = yield call(posts.get);
	yield delay(1);
	yield put(setPosts(data));
}

export function* postWatcher() {
	yield takeEvery(GET_POSTS, postWorker);
}
