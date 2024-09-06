import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Rock Paper Scissors",
      deploy_date: "23/02/2023",
      description:
        "A rock paper scissors game to practice on functions and math module of javascript",
      img: "../images/rock-paper-scissors.jpg",
    },
    {
      id: 2,
      name: "Caculator",
      deploy_date: "10/11/2023",
      description: "A calculator app to practice much on grid layout in css",
      link: "https://calmas.netlify.app/",
      img: "../images/ack.jpg",
    },
    {
      id: 3,
      name: "Graphic Design",
      deploy_date: "23/02/2011",
      description: "Design Dom elements before initial coding",
      img: "../images/graphic.jpg",
    },
    {
      id: 4,
      name: "School portal",
      deploy_date: "02/03/2024",
      description:
        "the project is designed using the concept of rest api to fetch data from an online source",
      img: "../images/ack.jpg",
    },
    {
      id: 5,
      name: "To do List",
      deploy_date: "13/07/2024",
      description:
        "To do list app is designed to ewscord tasks which you ought to do over time. it uses the concept of local storage to make them available even after page refresh",
      img: "../images/todo-list.jpg",
    },
    {
      id: 6,
      name: "Mpesa integration",
      deploy_date: "30/08/2024",
      description: "it uses safaricom daraja api to integrate mpesa ",
      img: "../images/daraja.png",
    },
  ]);

  return (
    <Container fluid>
      <Row className="mt-3">
        {projects.map((project) => (
          <Col lg={3} md={4} sm={6} className="mb-4 " key={project.id}>
            <Card className="h-100">
              <Card.Header className="bg-primary text-white">
                <h2 className="h5">{project.name}</h2>
              </Card.Header>
              <Card.Body>
                <NavLink to={project.link}>
                  <img
                    src={project.img}
                    alt={project.name}
                    className="img-fluid mb-3"
                  />
                </NavLink>
                <p>Uploaded at {project.deploy_date}</p>
                <p>{project.description}</p>
              </Card.Body>
              <Card.Footer>
                <p>Copyright © {new Date().getFullYear()}</p>
                <NavLink to={project.link}>View project</NavLink>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    // <div className="container">
    //   <div className="row mt-3">
    //     {projects.map((project) => (
    //       <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={project.id}>
    //         <div className="card h-100">
    //           <div className="card-header bg-primary text-white">
    //             <h2>{project.name}</h2>
    //           </div>
    //           <div className="card-body">
    //             <p> Uploaded at {project.deploy_date}</p>

    //             <NavLink to={project.link}>
    //               <img
    //                 src={project.img}
    //                 alt={project.name}
    //                 className="img-fluid"
    //               />
    //             </NavLink>
    //             <p className="mt-3">{project.description}</p>
    //           </div>
    //           <div className="card-footer">
    //             <p>Copyright @ {new Date().getFullYear()}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};
export default Projects;
