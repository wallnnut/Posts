import axios from "axios";

export const posts = {
	get: async () => {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		return data;
	},
};
