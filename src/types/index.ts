export interface IComment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}
export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}
export interface IAction {
	type: string;
	payload: [IPost] | [IComment];
}

export interface IInitialState {
	posts: [] | [IPost];
	comments: [] | [IComment];
}
