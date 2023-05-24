import React from "react";
import { IComment } from "../types";

const Comment = ({ comment }: { comment: IComment }) => {
	return (
		<>
			<div>
				<p>{comment.email}</p>
				<p>{comment.body}</p>
			</div>
		</>
	);
};

export default Comment;
