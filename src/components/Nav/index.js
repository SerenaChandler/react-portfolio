import React from "react";

function Nav() {
  return (
    <div className="text-center" style={{ background: "#4b4b4b", paddingTop: 10, paddingBottom: 25  }}>
      <nav className="mt-4">
        <h1 className="d-inline mx-4 nav-item">
          <a href="/home" className="text-decoration-none">
            About Me
          </a>
        </h1>
        <h1 className="d-inline mx-4 nav-item">
          <a href="/search" className="text-decoration-none">
            Projects
          </a>
        </h1>
        <h1 className="d-inline mx-4 nav-item">
          <a href="/saved" className="text-decoration-none">
            Resume
          </a>
        </h1>
        <h1 className="d-inline mx-4 nav-item">
          <a href="/saved" className="text-decoration-none">
            Contact
          </a>
        </h1>
      </nav>
    </div>
  );
}

export default Nav;
