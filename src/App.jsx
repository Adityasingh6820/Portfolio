import React from 'react'
import './App.css'

import Navbar from './Components/Navbar.jsx'
import Frontpage from './Components/About.jsx'
import About from './Components/Front.jsx'
import Projects from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'
import Resume from './Components/Resume.jsx'
import Contact from './Components/Contact.jsx'
import Education from './Components/Education.jsx'

function App() {
  

  return (
    <>
    
    
      <Navbar></Navbar>
      {/* <Frontpage></Frontpage> */}
      <About/>
      <Frontpage></Frontpage>
      <Projects></Projects>
      <Skills></Skills>
      <Education></Education>
      <Resume></Resume>
      <Contact></Contact>
    
    
    
    </>
  )
}

export default App
