import react, { useState } from "react";
import projects from "../projects.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Projects = () => {
  return (
    <div id="projects" style={{  background: "black", paddingBottom: 50 }}>
      
      <h1 style={{ color: "white", textAlign: "center", paddingBottom: 50, paddingTop: 50 }}>
        Portfolio
      </h1>

      <div className="row">
        {projects.map((project) => (
          <Card
            className="col-sm-12 col-md-6 col-lg-4"
            style={{ width: "24rem", background: "grey", margin: "auto", paddingTop: 10 }}
          >
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.desc}</Card.Text>
              <a href={project.link} target="_blank">
                <Button style={{  background: "grey", color: "black", borderColor: "black" }} variant="primary">See Project</Button>{" "}
              </a>
              <a href={project.repo} target="_blank">
                <Button style={{  background: "grey", color: "black", borderColor: "black"  }} variant="primary">See Repository</Button>{" "}
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
