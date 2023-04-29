import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error =>console.log(error))
  }

  return (
    <Container>
      <div className="mt-3">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                  <Link to="/category/0">Home</Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav className="d-flex justify-content-center align-items-center">
                
                  { user &&
                    <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                  }
                
                {user ? (
                  <Button onClick={handleLogOut} variant="success">LogOut</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="success">Log in</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavigationBar;
