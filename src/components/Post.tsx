import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comments from "./CommentsList";
import { Link } from "react-router-dom";

const Post = () => {
	const [showComments, setShowComments] = useState(false);
	const handleClick = () => {
		setShowComments(() => !showComments);
	};
	return (
		<Card style={{ width: "45rem" }}>
			<Link to="/user">
				<Card.Img variant="top" src="https://placehold.co/100" />
			</Link>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</Card.Text>
				<Button onClick={handleClick} variant="primary">
					Коментарии
				</Button>
				{showComments && <Comments />}
			</Card.Body>
		</Card>
	);
};

export default Post;
