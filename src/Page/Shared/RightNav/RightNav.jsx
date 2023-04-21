import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png';

const RightNav = () => {
  return (
    <>
    <div className="">
      <h3 className="mb-3">Login with</h3>
      <Button className="mb-1" variant="outline-primary"> <FaGoogle /> Login with Google</Button>
      <Button className="mb-5" variant="outline-secondary"><FaGithub /> Login with Github</Button>
    </div>
    <div>
      <h3 className="mb-3">Find Us On</h3> 
      <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
    </ListGroup> 

    </div>
    <QZone></QZone>
    <div>
        <img src={bg} alt="" />
    </div>
    </>
  );
};

export default RightNav;
