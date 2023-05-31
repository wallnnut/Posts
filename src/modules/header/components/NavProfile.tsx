import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";

const NavProfile = () => {
	return (
		<Container className="d-flex flex-column align-items-center">
			<Row className="justify-content-center">
				<Col className="mt-2" xs={6} md={4}>
					<Link to="/about/me">
						<Figure.Image
							width={171}
							height={180}
							alt="171x180"
							src={require("../../../images/2.jpg")}
							roundedCircle
						/>
					</Link>
				</Col>
			</Row>
			<Row>
				<Col className="d-flex flex-column align-items-center mt-2">
					<Link
						style={{ textDecoration: "none", color: "#fff" }}
						to="/about/me"
					>
						<p className=" fs-6 text-white">Марат</p>
					</Link>

					<p className="text-white">
						marat.abdurakhmanov.work@gmail.com
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default NavProfile;
