import React from "react";
import Comment from "./components/Comment";
import { IComment } from "../../types";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

interface ICommentList {
	commentsList: [IComment];
	postID: number;
}

const Comments: React.FC<ICommentList> = ({ commentsList, postID }) => {
	const commentsLoaded = useSelector(
		(store: any) => store.commentReducer.commentsLoaded
	);
	return (
		<>
			{commentsList.map((comment) => (
				<>
					{comment.postId === postID && (
						<>
							{commentsLoaded ? (
								<>
									<Comment
										key={comment.id}
										comment={comment}
									/>
									<hr />
								</>
							) : (
								<Spinner />
							)}
						</>
					)}
				</>
			))}
		</>
	);
};

export default Comments;
