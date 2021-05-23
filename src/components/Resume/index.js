import React, { ReactPDF } from "react";

function Resume() {
  return (
    <div id="home" className="row" style={{ background: "grey" }}>
      <div className="text-center">
        <div id="resume">
          <h1 class="section">Resume</h1>
          <div>
            <img src="./images/resume.png" />

            <h2>
              <a href="./images/currentResume.pdf" target="_blank" download>
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
