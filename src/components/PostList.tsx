import React from "react";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Post from "./Post";

const PostList = () => {
	const array = [1, 2, 3, 4, 5, 6, 7];
	return (
		<Container className="mt-5">
			<Stack
				className="flex-wrap col-md-6 mx-auto"
				direction="horizontal"
				gap={3}
			>
				{array.map((el) => (
					<Post />
				))}
			</Stack>
		</Container>
	);
};

export default PostList;
