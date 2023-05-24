import axios from "axios";

export const comments = {
	get: async (id: number) => {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/comments?postId=${id}`
		);
		return data;
	},
};
