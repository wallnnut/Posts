import { IUser } from "../types";
import { user } from "../api/user";
import { put, call, takeEvery } from "redux-saga/effects";

// ==============================CONSTANTS=================================
export const GET_USER = "GET_USER" as const;
export const SET_USER = "SET_USER" as const;

// ==============================ACTIONS===================================

type userActionTypes = ReturnType<typeof getUser> | ReturnType<typeof setUser>;

export const getUser = (id: number) =>
	({
		type: GET_USER,
		payload: id,
	} as const);

export const setUser = (data: IUser[]) =>
	({
		type: SET_USER,
		payload: data,
	} as const);

// ================================REDUCERS=============================

interface IState {
	user: IUser | object;
	userLoaded: boolean;
	isLoading: boolean;
}

export const initialState: IState = {
	user: {},
	userLoaded: false,
	isLoading: false,
};

const userInfo = (
	state: IState = initialState,
	{ type, payload }: userActionTypes
) => {
	switch (type) {
		case GET_USER:
			return { ...state, isLoading: true };
		case SET_USER:
			return {
				...state,
				user: payload,
				userLoaded: true,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default userInfo;

// ================================SAGAS===========================================

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
