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
	payload: IPost[] | IComment[];
}

export interface IInitialState {
	posts: [] | [IPost];
	comments: [] | [IComment];
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
