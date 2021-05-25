import React from "react";

function Contact() {
  return (
    <div id="contact" style={{ background: "black", paddingBottom: 50 }}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          paddingBottom: 50,
          paddingTop: 50,
        }}
      >
        Contact Me
      </h1>
      <div className="row">
         <a
          className="col text-decoration-none"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 30
          }}
          href="https://github.com/SerenaChandler"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          </a>
        
         <a
          className="col text-decoration-none"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 30
          }}
          href="https://www.linkedin.com/in/serena-chandler-b62a39204/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
          </a>
        
        <a
          className="col text-decoration-none"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 30
          }}
          href="mailto:serenachandler2019@gmail.com"
          target="_blank" rel="noreferrer"
        >
          Email
          </a>
        
      </div>
    </div>
  );
}

export default Contact;
