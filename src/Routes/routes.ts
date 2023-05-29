import About from "../Pages/About";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import NavBar from "../modules/header/NavBar";
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
