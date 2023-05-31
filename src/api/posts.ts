import axios from "axios";
import { IPost } from "../types";

export const posts = {
	get: async (): Promise<IPost[]> => {
		const { data }: { data: IPost[] } = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		return data;
	},
};
