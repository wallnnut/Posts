import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavProfile from "./components/NavProfile";
import { Outlet } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link
							style={{ textDecoration: "none", color: "#fff" }}
							to="/"
						>
							Список постов
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link
								style={{
									textDecoration: "none",
									color: "#fff",
								}}
								to="/about/me"
							>
								Обо мне
							</Link>
						</Nav>
						<Nav>
							<NavProfile />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
};

export default NavBar;
