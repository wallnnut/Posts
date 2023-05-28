import App from "../App";
import About from "../Pages/About";
import { createBrowserRouter } from "react-router-dom";
import UserInfo from "../Pages/UserInfo";
import MainPage from "../Pages/MainPage";
import NavBar from "../modules/header/NavBar";
import { getUser } from "../redux/actions";

export const router = createBrowserRouter([
	{
		Component: NavBar,
		children: [
			{
				path: "/",
				Component: MainPage,
			},
			{
				path: "/about?/:id",
				Component: About,
			},
		],
	},
]);
