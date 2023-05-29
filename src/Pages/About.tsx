import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Figure, Spinner, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/users";
import { IPost, IUser } from "../types";
import Post from "../modules/postList/components/Post";

const About = () => {
	// React Router DOM Variables
	const navigate = useNavigate();
	const { id } = useParams();

	// Redux Variables
	const dispatch = useDispatch();
	const userLoaded = useSelector(
		(store: any) => store?.userReducer?.userLoaded
	);
	const isLoading = useSelector(
		(store: any) => store?.userReducer?.isLoading
	);
	const user: IUser = useSelector((store: any) => store?.userReducer?.user);

	const postList = useSelector((store: any) =>
		store.postReducer.posts.filter(
			(post: IPost) => post.userId === Number(id)
		)
	);

	const goToMainPage = () => {
		navigate("/");
	};

	useEffect(() => {
		if (!userLoaded) {
			dispatch(getUser(Number(id)));
		}
	}, []);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<Container className="mt-5">
					<Button onClick={goToMainPage}>Назад</Button>
					<Card className="mx-auto" style={{ width: "43rem" }}>
						<Figure.Image
							width={171}
							height={180}
							alt="100x100"
							src={
								id !== "me"
									? "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
									: "2.jpg"
							}
							roundedCircle
						/>
						<Card.Body>
							<Card.Title>
								Имя:
								<span className="fs-4">
									{id !== "me"
										? user.name
										: "Абдурахманов Марат"}
								</span>
							</Card.Title>
							<Card.Title>
								Email:
								<span className="fs-4">
									{id !== "me"
										? user.email
										: "marat.abdurakhmanov.work@gmail.com"}
								</span>
							</Card.Title>
							<Card.Title>
								Телефон:
								<span className="fs-4">
									{id !== "me"
										? user.phone
										: "+7 999 140 55 40"}
								</span>
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
									width={35}
									key={post.id}
								/>
							))}
						</Stack>
					</Card>
				</Container>
			)}
		</>
	);
};

export default About;
