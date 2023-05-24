import { IComment, IPost } from "../../types";
import { GET_COMMENTS, GET_POSTS, SET_COMMENTS, SET_POSTS } from "../constants";
// POSTS
export const getPosts = () => {
	return {
		type: GET_POSTS,
	};
};

export const setPosts = (data: [IPost]) => {
	return {
		type: SET_POSTS,
		payload: data,
	};
};

// COMMENTS

export const getComments = (id: number) => {
	return {
		type: GET_COMMENTS,
		id,
	};
};
export const setComments = (data: [IComment]) => {
	return {
		type: SET_COMMENTS,
		payload: data,
	};
};