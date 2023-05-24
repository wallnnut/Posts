import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./Pages/MainPage";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<>
			<NavBar />
			<MainPage />
		</>
	);
}

export default App;
