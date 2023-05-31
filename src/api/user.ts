import axios from "axios";
import { IUser } from "../types";

export const user = {
	get: async (id: number): Promise<IUser | {}> => {
		const { data }: { data: IUser[] } = await axios.get(
			`https://tsonplaceholder.typicode.com/users?id=${id}`
		);
		const user = data.find((el: IUser) => el);
		if (user) {
			return user;
		} else return {};
	},
};
