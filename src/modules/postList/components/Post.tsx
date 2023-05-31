import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comments from "../../commentList/CommentsList";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../../redux/comments";
import { getUser } from "../../../redux/users";
import Spinner from "react-bootstrap/Spinner";
import { IComment } from "../../../types";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

interface Ipost {
	title: string;
	text: string;
	postID: number;
	userID: number;
	avatar: boolean;
	width?: number;
	isLoading?: boolean;
	error?: string | boolean;
}

const Post: React.FC<Ipost> = ({
	title,
	text,
	postID,
	userID,
	avatar,
	width,
	isLoading,
	error,
}) => {
	const [showComment, setShowComment] = useState(false);

	const dispatch = useDispatch();

	const commentsList: IComment[] = useSelector(
		(store: any) => store.commentReducer.comments
	);
	const commentsLoaded = useSelector(
		(store: any) => store.commentReducer.commentsLoaded
	);

	const hasComments: IComment[] = commentsList.filter(
		(coment: IComment): boolean => coment.postId === postID
	);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!hasComments.length) {
			dispatch(getComments(postID));
		}
		setShowComment((prevState) => !prevState);
	};

	return (
		<Card
			style={{ margin: "0 auto", width: width ? `${width}rem` : "45rem" }}
		>
			<Link
				onClick={() => dispatch(getUser(userID))}
				to={`/about/${userID}`}
			>
				{avatar && (
					<Image
						src={
							avatar
								? "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
								: require("../../../images/2.jpg")
						}
						style={{
							width: "100px",
							height: "100px",
						}}
						roundedCircle
					/>
				)}
			</Link>
			<Card.Body>
				<Card.Title className="text-warning fs-3"> {title}</Card.Title>
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
					{error && (
						<Alert className="mt-3" variant="danger">
							{error}
						</Alert>
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
