import React from "react"
import Navbar from "./components/Navbar"
import About  from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import './index.css'

function App() {
  return (
    <main className="text-textgrey bg-slate body-font font-poppins">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Resume/>*/}
      <Contact />
    </main>
  );
}

export default App;
