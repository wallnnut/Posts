import React from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
	const id = useParams();
	console.log(id);

	return <h1>post</h1>;
};

export default UserInfo;
