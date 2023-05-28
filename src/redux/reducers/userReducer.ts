import { IAction, IUser } from "./../../types/index";
import { GET_USER, SET_USER } from "../constants";

interface IInit {
	user: IUser | object;
	userLoaded: boolean;
	isLoading: boolean;
}

export const initialState: IInit = {
	user: {},
	userLoaded: false,
	isLoading: false,
};

const userReducer = (
	state: IInit = initialState,
	{ type, payload }: IAction
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

export default userReducer;
