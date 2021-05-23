import React from "react";


function Nav() {
  return (
    <div className="text-center fixed-top" style={{ background: "#4b4b4b", paddingTop: 10, paddingBottom: 25, }}>
      <nav className="">
        <h1 className="d-inline mx-4 nav-item">
          <a style={{ color: "white" }} href="#home" className="text-decoration-none">
            Home 
          </a>
        </h1>
        <h1 className="d-inline mx-4 nav-item">
          <a style={{ color: "white" }} href="#about" className="text-decoration-none">
            About 
          </a>
        </h1>
        <h1 className="d-inline mx-4 nav-item">
          <a style={{ color: "white" }} href="#projects" className="text-decoration-none">
            Projects
          </a>
        </h1>
        <h1 className="d-inline mx-4 nav-item">
          <a style={{ color: "white" }} href="#resume" className="text-decoration-none">
            Resume
          </a>
        </h1>
        <h1 className="d-inline mx-4 nav-item">
          <a style={{ color: "white" }} href="#contact" className="text-decoration-none">
            Contact
          </a>
        </h1>
      </nav>
    </div>
  );
}

export default Nav;
