import React from "react";

const Homepage = () => {
  return (
    <div id="home" className="row" style={{ background: "grey" }}>
      <div className="text-center">
        <h1 style={{ color: "white", paddingTop: 150 }}>Serena Chandler</h1>

        <img src="./images/transDev.png" />

        <h2 style={{ color: "white", paddingBottom: 250, }}>Web Developer</h2>
      </div>
    </div>
  );
};

export default Homepage;
