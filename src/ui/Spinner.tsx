import React from "react";
import { Spinner } from "react-bootstrap";

const CustomSpinner: React.FC = () => {
	return (
		<Spinner
			style={{
				position: "absolute",
				height: "100px",
				width: "100px",
				top: "50%",
				left: "50%",
				marginLeft: "-50px",
				marginTop: "-50px",
			}}
		/>
	);
};

export default CustomSpinner;
