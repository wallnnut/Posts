import React from "react";
import Comment from "./Comment";
const Comments = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	return (
		<>
			{array.map((el) => (
				<>
					<Comment />
					<hr />
				</>
			))}
		</>
	);
};

export default Comments;
