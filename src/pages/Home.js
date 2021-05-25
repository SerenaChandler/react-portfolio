import React from "react";

const Homepage = () => {
  return (
    <section id="home" className="row" style={{ background: "black" }}>
      <div className="text-center">
        <h1 style={{ color: "white", paddingTop: 150 }}>Serena Chandler</h1>

        <img alt="icon" src="./images/transDev.png" />

        <h2 style={{ color: "white", paddingBottom: 250, }}>Web Developer</h2>
      </div>
    </section>
  );
};

export default Homepage;
