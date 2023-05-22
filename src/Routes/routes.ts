import App from "../App";
import About from "../Pages/About";
import { createBrowserRouter } from "react-router-dom";
import UserInfo from "../Pages/UserInfo";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
	{
		path: "/about",
		Component: About,
	},
	{
		path: "/user",
		Component: UserInfo,
	},
]);
