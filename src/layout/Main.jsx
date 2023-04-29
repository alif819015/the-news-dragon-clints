import React from "react";
import Header from "../Page/Shared/Header/Header";
import Footer from "../Page/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Page/Shared/LeftNav/LeftNav";
import RightNav from "../Page/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Page/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row className="mt-5">
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
