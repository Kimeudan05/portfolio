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
// import "./Footer.css"; // Import custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="bg-dark text-white py-4 ">
        <Row className="align-items-center">
          {/* Company Name */}
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h2>Company Kilo</h2>
          </Col>

          {/* Navigation Links */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Nav className="justify-content-center">
              <NavLink to="/" className="text-white mx-2">
                Home
              </NavLink>
              <NavLink to="/about" className="text-white mx-2">
                About
              </NavLink>
              <NavLink to="/portfolio" className="text-white mx-2">
                Portfolio
              </NavLink>
              <NavLink to="/projects" className="text-white mx-2">
                Projects
              </NavLink>
              <NavLink to="/contacts" className="text-white mx-2">
                Contact
              </NavLink>
            </Nav>
          </Col>

          {/* Social Media Icons */}
          <Col md={4} className="text-center">
            <div className="d-flex justify-content-center foot">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social-icon mx-2"
                  aria-label="Twitter"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="social-icon mx-2"
                  aria-label="LinkedIn"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  className="social-icon mx-2"
                  aria-label="YouTube"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-icon mx-2"
                  aria-label="Instagram"
                />
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="social-icon mx-2"
                  aria-label="WhatsApp"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
