import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Figure, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/users";
import { IPost, IStore, IUser } from "../types";
import Post from "../modules/postList/components/Post";
import CustomSpinner from "../ui/Spinner";
import Alert from "react-bootstrap/Alert";

const About = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	// Redux Variables
	const dispatch = useDispatch();
	const userLoaded = useSelector(
		(store: IStore) => store?.userReducer?.userLoaded
	);
	const isLoading = useSelector(
		(store: IStore) => store?.userReducer?.isLoading
	);
	const user: IUser = useSelector((store: any) => store?.userReducer?.user);
	const userError = useSelector((store: IStore) => store.userReducer.error);

	const postList = useSelector((store: IStore) =>
		store.postReducer.posts.filter(
			(post: IPost) => post.userId === Number(id)
		)
	);

	const goToMainPage = () => {
		navigate("/");
	};

	useEffect(() => {
		if (!userLoaded && id !== "me") {
			dispatch(getUser(Number(id)));
		}
	}, []);

	return (
		<>
			{userError && id !== "me" ? (
				<Alert
					style={{ width: "25rem" }}
					className="mt-3 mx-auto"
					variant="danger"
				>
					{userError}
				</Alert>
			) : (
				<>
					{isLoading ? (
						<CustomSpinner />
					) : (
						<Container className="mt-5">
							<Button onClick={goToMainPage}>На главную</Button>
							<Card
								className="mx-auto mt-4"
								style={{ width: "43rem" }}
							>
								<Figure.Image
									width={100}
									height={100}
									alt="100x100"
									src={
										id !== "me"
											? "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
											: require("../images/2.jpg")
									}
									roundedCircle
								/>
								<Card.Body>
									<Card.Title className="fs-2">
										Имя: {""}
										<span className="fs-4">
											{id !== "me"
												? user.name
												: "Абдурахманов Марат"}
										</span>
									</Card.Title>
									<Card.Title className="fs-2">
										Email: {""}
										<span className="fs-4">
											{id !== "me"
												? user.email
												: "marat.abdurakhmanov.work@gmail.com"}
										</span>
									</Card.Title>
									<Card.Title className="fs-2">
										Телефон: {""}
										<span className="fs-4">
											{id !== "me"
												? user.phone
												: "+7 999 140 55 40"}
										</span>
									</Card.Title>
									{id === "me" && (
										<>
											<Card.Title>О себе:</Card.Title>
											<Card.Text>
												Привет, меня зовут Марат. Мне 26
												лет. Родом я из города Бухара,
												который находится в Узбекистане.
												Там я прожил до 18 лет. Позже
												переехал в Россию для
												поступления в ВУЗ. Окончил
												бакалавриат в городе Набережные
												Челны по направлению
												инженер-технолог. Затем переехал
												в город Нижний Новгород, там
												окончил магистратуру по
												направлению инженер. Сейчас
												проживаю в городе Казань и
												нахожусь в поиске работы
												FrontEnd разработчиком. Свой
												путь я начал относительно
												недавно. Прошел обучение по
												направлению FrontEnd developer.
												За время обучения участвовал в
												двух хакатонах, где наша команда
												заняла 1-е место. С нуля
												разработал FullStack приложение
												TaskManager. Непрерывно
												развиваюсь и изучаю новые
												технологии. В свободное время
												нравится читать прикладные книги
												в области психологии и
												саморазвития. Каждый утро уделяю
												время утренней пробежке, она
												придает сил и энергии на весь
												день.
											</Card.Text>
										</>
									)}
								</Card.Body>

								<Stack gap={3}>
									{id !== "me" && (
										<Card.Title className="mx-auto">
											Список постов:
										</Card.Title>
									)}

									{postList.map((post: IPost) => (
										<Post
											title={post.title}
											text={post.body}
											postID={post.id}
											userID={post.userId}
											avatar={false}
											width={35}
											isLoading={post.commentsLoading}
											key={post.id}
										/>
									))}
								</Stack>
							</Card>
						</Container>
					)}
				</>
			)}
		</>
	);
};

export default About;
