import axios from "axios";
import { IUser } from "../types";

export const user = {
	get: async (id: number) => {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/users?id=${id}`
		);
		const user = data.find((el: IUser) => el);
		return user;
	},
};
