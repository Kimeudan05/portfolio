import React from "react";
import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

// import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <Container
        fluid
        className="fixed-bottom justify-content-center align-items-center"
      >
        <Row className="bg-dark p-4 text-white">
          <Col className="mx-5">
            <h2>Company kilo</h2>
          </Col>
          <Col>
            <Nav>
              <NavLink to="/" className="text-white">
                Home
              </NavLink>
              <NavLink to="/about" className="text-white">
                About
              </NavLink>
              <NavLink to="/portfolio" className="text-white">
                Portfolio
              </NavLink>
              <NavLink to="/projects" className="text-white">
                Projects
              </NavLink>
              <NavLink to="/contacts" className="text-white">
                Contact
              </NavLink>
            </Nav>
          </Col>
          <Col>
            {/* <h4>Contact us</h4>
            <p>Email :kimeudan05@gmail.com</p>
            <p>Phone : +254799182231</p> */}
            <div className="icons d-flex justify-content-center h-100 align-items-center">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "blue" }} />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "blue", margin: "10px " }}
              />
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                style={{ color: "blue" }}
              />
              <FontAwesomeIcon icon={faInstagram} style={{ color: "blue" }} />
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "blue" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
