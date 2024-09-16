import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
// import "./ProjectDetails.css"; // Add a CSS file for custom styles

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Rock Paper Scissors",
      deploy_date: "23/02/2023",
      description:
        "A rock paper scissors game to practice on functions and math module of javascript. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit officia iusto obcaecati ipsa quasi laborum harum, blanditiis ea, optio laboriosam quae illum magnam veniam earum reprehenderit assumenda fuga hic repellendus voluptas! Ad, delectus corrupti qui earum quas cum labore.",
      img: "../images/rock-paper-scissors.jpg",
      link: "https://calmas.netlify.app/",
    },
    {
      id: 2,
      name: "Calculator",
      deploy_date: "10/11/2023",
      description:
        "A calculator app to practice much on grid layout in CSS. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit officia iusto obcaecati ipsa quasi laborum harum, blanditiis ea, optio laboriosam quae illum magnam veniam earum reprehenderit assumenda fuga hic repellendus voluptas! Ad, delectus corrupti qui earum quas cum labore.",
      link: "https://calmas.netlify.app/",
      img: "../images/ack.jpg",
    },
    {
      id: 3,
      name: "Graphic Design",
      deploy_date: "23/02/2011",
      description:
        "Design DOM elements before initial coding. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit officia iusto obcaecati ipsa quasi laborum harum, blanditiis ea, optio laboriosam quae illum magnam veniam earum reprehenderit assumenda fuga hic repellendus voluptas! Ad, delectus corrupti qui earum quas cum labore.",
      img: "../images/graphic.jpg",
      link: "https://calmas.netlify.app/",
    },
    {
      id: 4,
      name: "Tic Tac Toe",
      deploy_date: "11/09/2024",
      description:
        "The project utilizes the use of state and also introduction to components. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit officia iusto obcaecati ipsa quasi laborum harum, blanditiis ea, optio laboriosam quae illum magnam veniam earum reprehenderit assumenda fuga hic repellendus voluptas! Ad, delectus corrupti qui earum quas cum labore.",
      img: "../images/tic-tac.png",
      link: "https://masilatic.netlify.app/",
    },
    {
      id: 5,
      name: "To Do List",
      deploy_date: "13/07/2024",
      description:
        "To Do List app is designed to record tasks which you ought to do over time. It uses the concept of local storage to make them available even after page refresh.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit officia iusto obcaecati ipsa quasi laborum harum, blanditiis ea, optio laboriosam quae illum magnam veniam earum reprehenderit assumenda fuga hic repellendus voluptas! Ad, delectus corrupti qui earum quas cum labore.",
      img: "../images/todo-list.jpg",
      link: "https://calmas.netlify.app/",
    },
    {
      id: 6,
      name: "Mpesa Integration",
      deploy_date: "30/08/2024",
      description:
        "It uses Safaricom Daraja API to integrate Mpesa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit officia iusto obcaecati ipsa quasi laborum harum, blanditiis ea, optio laboriosam quae illum magnam veniam earum reprehenderit assumenda fuga hic repellendus voluptas! Ad, delectus corrupti qui earum quas cum labore.",
      img: "../images/logo.png",
      link: "https://calmas.netlify.app/",
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <Container fluid className="mt-4">
      <section className="project-details">
        <h1>{project.name}</h1>
        <img src={project.img} alt={project.name} className="project-image" />
        <p>{project.deploy_date}</p>
        <p>{project.description}</p>
        <div className="project-footer">
          <Button
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            View Project
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/projects")}
            className="back-button"
          >
            Show all projects
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default ProjectDetails;
