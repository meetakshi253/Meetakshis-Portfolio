import React, { lazy, Suspense } from 'react';
import { Ellipsis } from 'react-awesome-spinners'
import './index.css'

const Navbar = lazy(() => import('./components/Navbar'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };


function App() {
  return (
    <main className="main">
      <Suspense fallback={<div style={style}> <Ellipsis /> <p>Loading</p> </div>}>
        <Navbar />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>

    </main>
  );
}

export default App;
