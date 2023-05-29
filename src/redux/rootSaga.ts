import { all } from "redux-saga/effects";
import { postWatcher } from "./posts";
import { commentWatcher } from "./comments";
import { userWatcher } from "./users";

export function* rootWatcher() {
	yield all([postWatcher(), commentWatcher(), userWatcher()]);
}
