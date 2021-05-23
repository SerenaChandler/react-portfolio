import React from "react";
import "./App.css";

// Pages
import Projects from "./pages/Projects";
import Homepage from "./pages/Home";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Nav";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
