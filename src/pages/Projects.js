import react, { useState } from "react";
import projects from "../projects.json"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Projects = () => {

  return (

    projects.map((project) => 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{project.title}</Card.Title>
    <Card.Text>
      {project.desc}
    </Card.Text>
    <a href={project.link}target="_blank" ><Button variant="primary" >See Project</Button> </a>
   <a href={project.repo}target="_blank" ><Button variant="primary">See Repository</Button> </a> 
  </Card.Body>
</Card>
    )
  )
}

export default Projects