import React from "react";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Post from "./components/Post";
import { useSelector } from "react-redux";
import { IPost, IStore } from "../../types";
import CustomSpinner from "../../ui/Spinner";
import Alert from "react-bootstrap/Alert";

const PostList = () => {
	const posts = useSelector((store: IStore) => store.postReducer.posts);
	const postLoaded = useSelector(
		(store: IStore) => store.postReducer.postLoaded
	);
	const commentsError = useSelector(
		(store: IStore) => store.commentReducer.error
	);
	const postsError = useSelector((store: IStore) => store.postReducer.error);

	return (
		<Container className="mt-5">
			{postsError ? (
				<Alert className="mt-3" variant="danger">
					{postsError}
				</Alert>
			) : (
				<>
					{postLoaded ? (
						<Stack
							className="flex-wrap col-md-6 mx-auto"
							direction="horizontal"
							gap={3}
						>
							<h2>Список постов</h2>
							{posts.map((post: IPost) => (
								<Post
									error={
										commentsError?.id === post.id
											? commentsError.message
											: undefined
									}
									key={post.id}
									title={post.title}
									text={post.body}
									postID={post.id}
									userID={post.userId}
									isLoading={post.commentsLoading}
									avatar={true}
								/>
							))}
						</Stack>
					) : (
						<CustomSpinner />
					)}
				</>
			)}
		</Container>
	);
};

export default PostList;
