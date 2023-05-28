import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comments from "../../commentList/CommentsList";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getComments, getUser } from "../../../redux/actions";
import Spinner from "react-bootstrap/Spinner";

interface Ipost {
	title: string;
	text: string;
	postID: number;
	userID: number;
	avatar: boolean;
}

const Post: React.FC<Ipost> = ({ title, text, postID, userID, avatar }) => {
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
		<Card style={{ margin: "0 auto", width: "35rem" }}>
			<Link
				onClick={() => dispatch(getUser(userID))}
				to={`/about/${userID}`}
			>
				<Card.Img
					variant="top"
					src={
						avatar
							? "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
							: ""
					}
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
								aria-hidden="true"
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
