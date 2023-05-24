import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comments from "./CommentsList";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../redux/actions";
import Spinner from "react-bootstrap/Spinner";

interface Ipost {
	title: string;
	text: string;
	postID: number;
}

const Post: React.FC<Ipost> = ({ title, text, postID }) => {
	const [showComment, setShowComment] = useState(false);

	const dispatch = useDispatch();
	const isLoading = useSelector(
		(store: any) => store?.commentReducer?.isLoading
	);
	const commentsList = useSelector(
		(store: any) => store.commentReducer.comments
	);
	const commentsLoaded = useSelector(
		(store: any) => store.commentReducer.commentsLoaded
	);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		if (!showComment) {
			dispatch(getComments(postID));
		}
		setShowComment((prevState) => !prevState);
	};

	return (
		<Card style={{ width: "45rem" }}>
			<Link to="/user">
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCZNByODqj86H1gM8R6DzxYOp2-X9Z87B8WBEkjlr1FyW9eSDBPvMfUHsJy-Z5Z5PiIc&usqp=CAU"
				/>
			</Link>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{text}</Card.Text>
				<>
					{isLoading ? (
						<Button variant="primary" disabled>
							<Spinner
								as="span"
								animation="grow"
								size="sm"
								role="status"
								// aria-hidden="true"
							/>
							Загрузка...
						</Button>
					) : (
						<Button onClick={handleClick} variant="primary">
							Коментарии
						</Button>
					)}
				</>

				{commentsLoaded && showComment && (
					<Comments postID={postID} commentsList={commentsList} />
				)}
			</Card.Body>
		</Card>
	);
};

export default Post;
