import React, { lazy, Suspense } from 'react';
import './index.css'

const Navbar = lazy(() => import('./components/Navbar'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// import Navbar from "./components/Navbar"
// import About from "./components/About"
// import Projects from "./components/Projects"
// import Experience from "./components/Experience"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"


const renderLoader = () => <div>Loading...</div>;

function App() {
  return (

    <main className="main">
      <Suspense fallback={renderLoader()}>
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
