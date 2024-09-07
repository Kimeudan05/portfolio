import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("../data/projects.json")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

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
