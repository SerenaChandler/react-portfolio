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
        <h2 className="col"
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          GitHub
        </h2>
        <h2 className="col"
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Linkedin
        </h2>
        <h2 className="col"
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Email
        </h2>
      </div>
    </div>
  );
}

export default Contact;
