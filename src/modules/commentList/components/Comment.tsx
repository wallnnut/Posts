import React from "react";
import { IComment } from "../../../types";

const Comment = ({ comment }: { comment: IComment }) => {
	return (
		<>
			<div>
				<p>
					<b>{comment.email}</b>
				</p>
				<p>{comment.body}</p>
			</div>
		</>
	);
};

export default Comment;
