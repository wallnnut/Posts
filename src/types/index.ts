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
	commentsLoading?: boolean;
}

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export type TError = {
	message: string;
	id: number;
};

export interface ICommentState {
	comments: [] | IComment[];
	commentsLoaded: boolean;
	isLoading: boolean;
	error: TError | null;
}
export interface IPostState {
	posts: [] | IPost[];
	postLoaded: boolean;
	error: string | null;
}
export interface IUserState {
	user: IUser | {};
	userLoaded: boolean;
	isLoading: boolean;
	error: null;
}

export interface IStore {
	commentReducer: ICommentState;
	postReducer: IPostState;
	userReducer: IUserState;
}
