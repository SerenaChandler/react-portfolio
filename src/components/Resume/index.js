import React, { ReactPDF } from "react";

function Resume() {
  return (
    <div id="home" className="row" style={{ background: "grey" }}>
      <div className="text-center">
        <div id="resume">
          <h1    style={{
          color: "white",
          paddingBottom: 50,
          paddingTop: 50,
        }} class="section">Resume</h1>
          <div>
            <img className="img-fluid mx-auto d-block" src="./images/resume.png" />

            <h2>
              <a style={{ color: "white" }}  className="text-decoration-none" href="./images/currentResume.pdf" target="_blank" download>
                click here to download
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
