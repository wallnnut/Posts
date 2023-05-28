import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Figure, Spinner, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions";
import { IPost, IUser } from "../types";
import Post from "../modules/postList/components/Post";
const About = () => {
	useEffect(() => {
		if (!userLoaded) {
			dispatch(getUser(Number(id)));
		}
	}, []);
	const navigate = useNavigate();

	const { id } = useParams();
	const dispatch = useDispatch();
	const userLoaded = useSelector(
		(store: any) => store?.userReducer?.userLoaded
	);
	const isLoading = useSelector(
		(store: any) => store?.userReducer?.isLoading
	);
	const user: IUser = useSelector((store: any) => store?.userReducer?.user);
	if (!userLoaded) {
	}
	const postList = useSelector((store: any) =>
		store.postReducer.posts.filter(
			(post: IPost) => post.userId === Number(id)
		)
	);

	const handleMain = () => {
		navigate("/");
	};

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<Container className="mt-5">
					<Button onClick={handleMain}>Назад</Button>
					<Card className="mx-auto" style={{ width: "43rem" }}>
						<Figure.Image
							width={171}
							height={180}
							alt="171x180"
							src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
						/>
						<Card.Body>
							<Card.Title>
								Имя - <span className="fs-4">{user.name}</span>
							</Card.Title>
							<Card.Title>
								Email -
								<span className="fs-4">{user.email}</span>
							</Card.Title>
							<Card.Title>
								Телефон -
								<span className="fs-4">{user.phone}</span>
							</Card.Title>
						</Card.Body>
						<Stack gap={3}>
							{postList.map((post: IPost) => (
								<Post
									title={post.title}
									text={post.body}
									postID={post.id}
									userID={post.userId}
									avatar={false}
								/>
								// <Card
								// 	style={{ margin: "0 auto", width: "38rem" }}
								// >
								// 	<Card.Body>
								// 		<Card.Title>{post.title}</Card.Title>
								// 		<Card.Text>{post.body}</Card.Text>
								// 	</Card.Body>
								// </Card>
							))}
						</Stack>
					</Card>
				</Container>
			)}
		</>
	);
};

export default About;
