import { IUserState } from "./../types/index";
import { IUser } from "../types";
import { user } from "../api/user";
import { put, call, takeEvery } from "redux-saga/effects";

// ==============================CONSTANTS=================================
export const GET_USER = "GET_USER" as const;
export const SET_USER = "SET_USER" as const;
export const SET_USER_ERROR = "SET_USER_ERROR" as const;

// ==============================ACTIONS===================================

type userActionTypes =
	| ReturnType<typeof getUser>
	| ReturnType<typeof setUser>
	| ReturnType<typeof setUserError>;

export const getUser = (id: number) =>
	({
		type: GET_USER,
		payload: id,
	} as const);

export const setUser = (data: IUser) =>
	({
		type: SET_USER,
		payload: data,
	} as const);
export const setUserError = (error: string) =>
	({
		type: SET_USER_ERROR,
		payload: error,
	} as const);

// ================================REDUCERS=============================
export const initialState: IUserState = {
	user: {},
	userLoaded: false,
	isLoading: false,
	error: null,
};

const userInfo = (
	state: IUserState = initialState,
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
		case SET_USER_ERROR: {
			return {
				...state,
				error: payload,
				isLoading: false,
				userLoaded: true,
			};
		}
		default:
			return state;
	}
};

export default userInfo;

// ================================SAGAS===========================================

const delay = (s: number) => new Promise((res) => setTimeout(res, s * 1000));

export function* userWorker(action: any): any {
	try {
		const data = yield call(user.get, action.payload);
		yield delay(1);
		yield put(setUser(data));
	} catch (error) {
		yield put(
			setUserError("There is a problem with fetching user. Try later.")
		);
	}
}

export function* userWatcher(): any {
	yield takeEvery(GET_USER, userWorker);
}
