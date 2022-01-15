import React from "react";

const Aboutme = () => {
  return (
    <section id="about" className="text-center" style={{ background: "#242424", paddingBottom: 50 }}>
      <container>
        <div>
          <h1     style={{
          color: "white",
          paddingBottom: 50,
          paddingTop: 50,
        }}>About Me</h1>
          <h3     style={{
          color: "white",
          

        }}>
            {" "}
            Hello, my name is Serena Chandler and I am a full stack web
            developer. I got my certification from the UC Bekeley extension
            program. I'm proficient in HTML, CSS, Javascript, SQL, and React.
          </h3>
        </div>

        <img
          style={{ width: "14rem", borderWidth: 2, borderColor: "gold", border: "solid", borderRadius: 5 }}
          src="./images/profile.jpg" alt="selfie"
        />
      </container>
    </section>
  );
};

export default Aboutme;
