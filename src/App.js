import React from "react";
import "./App.css";

// Pages
import Projects from "./pages/Projects";
import Homepage from "./pages/Home";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import Resume from "./components/Resume"

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Projects />
      <Resume/>
      <Footer />
    </div>
  );
}

export default App;
