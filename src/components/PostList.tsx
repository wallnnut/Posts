import React from "react";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Post from "./Post";
import { useSelector } from "react-redux";
import { IPost } from "../types";
import Spinner from "react-bootstrap/Spinner";

const PostList = () => {
	const posts = useSelector((store: any) => store.postReducer.posts);
	const postLoaded = useSelector(
		(store: any) => store.postReducer.postLoaded
	);
	return (
		<Container className="mt-5">
			<>
				{postLoaded ? (
					<Stack
						className="flex-wrap col-md-6 mx-auto"
						direction="horizontal"
						gap={3}
					>
						{posts.map((post: IPost) => (
							<Post
								key={post.id}
								title={post.title}
								text={post.body}
								postID={post.id}
							/>
						))}
					</Stack>
				) : (
					<Spinner className="mx-auto" />
				)}
			</>
		</Container>
	);
};

export default PostList;
