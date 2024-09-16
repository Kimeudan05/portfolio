import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";
// import "./NavbarLayout.css"; // Optional: You can define custom styles in a CSS file if needed.

const NavbarLayout = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        collapseOnSelect
        className="bg-dark"
        expanded={expanded}
        ref={navbarRef}
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
            <Nav className="fs-5 nav p-2">
              <NavLink
                to="/"
                className=" text-decoration-none text-white nav-link"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className=" text-decoration-none text-white nav-link"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
              <NavLink
                to="/portfolio"
                className=" text-decoration-none text-white nav-link"
                onClick={handleNavLinkClick}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/projects"
                className=" text-decoration-none text-white nav-link"
                onClick={handleNavLinkClick}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contacts"
                className=" text-decoration-none text-white nav-link"
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
