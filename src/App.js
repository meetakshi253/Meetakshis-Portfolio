import React from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './index.css'

function App() {
  return (
    <main className="main">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
