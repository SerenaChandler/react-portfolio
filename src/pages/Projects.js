import react, { useState } from "react";
import projects from "../projects.json"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Projects = () => {

  return (
    <section id="projects" style={{ background: "black" }}>

      <h1 className="section-title" style={{ color: "grey" }}>
        Portfolio
      </h1>


    {projects.map((project) =>  
<Card  style={{ width: '28rem', background: "grey" }}>
  <Card.Img variant="top" src={project.image} />
  <Card.Body>
    <Card.Title>{project.title}</Card.Title>
    <Card.Text>
      {project.desc}
    </Card.Text>
    <a href={project.link}target="_blank" ><Button variant="primary" >See Project</Button> </a>
   <a href={project.repo}target="_blank" ><Button variant="primary">See Repository</Button> </a> 
  </Card.Body>
</Card>
    )}

    </section>
  )
}

export default Projects