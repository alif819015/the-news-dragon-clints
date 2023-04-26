import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
      </div>
      <div className="d-flex bg-light p-2">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <div className="mt-3">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex justify-content-center align-items-center">
            <Nav.Link href="#deets">
             <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            { user ?
              <Button variant="success">LogOut</Button>:
              <Link to='/login'>
              <Button variant="success">Log in</Button>
              </Link>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

    </Container>
  );
};

export default Header;
