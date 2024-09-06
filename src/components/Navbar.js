import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const NavbarLayout = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        collapseOnSelect
        className="bg-dark"
        expanded={expanded}
      >
        <Container fluid className="ms">
          <Navbar.Brand href="#home" className="ms-4 text-white fs-4">
            Kimeu Solutions
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
            onClick={handleToggle}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink
                to="/"
                className="m-2 text-decoration-none text-white"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="m-2 text-decoration-none text-white"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
              <NavLink
                to="/portfolio"
                className="m-2 text-decoration-none text-white"
                onClick={handleNavLinkClick}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/projects"
                className="m-2 text-decoration-none text-white"
                onClick={handleNavLinkClick}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contacts"
                className="m-2 text-decoration-none text-white"
                onClick={handleNavLinkClick}
              >
                Contacts
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavbarLayout;
