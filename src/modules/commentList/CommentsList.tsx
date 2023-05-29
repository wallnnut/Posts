import React from "react";
import Comment from "./components/Comment";
import { IComment } from "../../types";
interface ICommentList {
	commentsList: IComment[];
	postID: number;
}

const Comments: React.FC<ICommentList> = ({ commentsList, postID }) => {
	return (
		<>
			{commentsList
				.filter((comment) => comment.postId === postID)
				.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
		</>
	);
};

export default Comments;
