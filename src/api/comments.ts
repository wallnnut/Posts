import axios from "axios";
import { IComment } from "../types";

export const comments = {
	get: async (id: number): Promise<IComment[]> => {
		const { data }: { data: IComment[] } = await axios.get(
			`https://jsonplaceholder.typicode.com/comments?postId=${id}`
		);

		return data;
	},
};
