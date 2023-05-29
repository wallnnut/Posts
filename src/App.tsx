import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/posts";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
