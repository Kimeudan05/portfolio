import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Rock Paper Scissors",
      deploy_date: "23/02/2023",
      description:
        "A rock paper scissors game to practice on functions and math module of javascrip",
      img: "../images/rock-paper-scissors.jpg",
      link: "https://calmas.netlify.app/",
    },
    {
      id: 2,
      name: "Calculator",
      deploy_date: "10/11/2023",
      description: "A calculator app to practice much on grid layout in css",
      link: "https://calmas.netlify.app/",
      img: "../images/ack.jpg",
    },
    {
      id: 3,
      name: "Graphic Design",
      deploy_date: "23/02/2011",
      description: "Design DOM elements before initial coding",
      img: "../images/graphic.jpg",
      link: "https://calmas.netlify.app/",
    },
    {
      id: 4,
      name: "Tic Tac Toe",
      deploy_date: "11/09/2024",
      description:
        "The project utilizes the use of state and also introduction to components",
      img: "../images/tic-tac.png",
      link: "https://masilatic.netlify.app/",
    },
    {
      id: 5,
      name: "To Do List",
      deploy_date: "13/07/2024",
      description:
        "To Do List app is designed to record tasks which you ought to do over time. It uses the concept of local storage to make them available even after page refresh.",
      img: "../images/todo-list.jpg",
      link: "https://calmas.netlify.app/",
    },
    {
      id: 6,
      name: "Mpesa Integration",
      deploy_date: "30/08/2024",
      description: "It uses Safaricom Daraja API to integrate Mpesa.",
      img: "../images/logo.png",
      link: "https://calmas.netlify.app/",
    },
  ];

  return (
    <Container fluid>
      <Row className="mt-4">
        {projects.map((project) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={project.id}>
            <Card className="h-100">
              <Card.Header className="bg-primary text-white">
                <h2 className="h5">{project.name}</h2>
              </Card.Header>
              <Card.Body>
                <Link to={`/projects/${project.id}`}>
                  <Card.Img
                    variant="top"
                    src={project.img}
                    alt={project.name}
                    className="img-fluid"
                  />
                </Link>
              </Card.Body>
              <Card.Footer>
                <Card.Text className="text-center text-primary fw-bold ">
                  Deployed at : {project.deploy_date}
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
