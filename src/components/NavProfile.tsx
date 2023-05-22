import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const NavProfile = () => {
	return (
		<Container className="d-flex flex-column align-items-center">
			<Row>
				<Col xs={6} md={4}>
					<Image src="https://placehold.co/50" roundedCircle />
				</Col>
			</Row>
			<Row>
				<Col>
					<p className=" fs-6 text-white">name</p>
					<p className="text-white">Email</p>
				</Col>
			</Row>
		</Container>
	);
};

export default NavProfile;
