import React from "react";
import "./App.css";

// Pages
import Projects from "./pages/Projects";
import Homepage from "./pages/Home";
import Aboutme from "./pages/Aboutme"

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import Resume from "./components/Resume"

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutme/>
      <Projects />
      <Resume/>
      <Footer />
    </div>
  );
}

export default App;
