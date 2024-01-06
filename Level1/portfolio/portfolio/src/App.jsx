import React from "react";
import Header from "./Header/Header";
import Contact from "./Contact";
import About from "./About";
import Education from "./Education";
import Courses from "./Courses";
import Project from "./Project";
import Talks from "./Talks";
import Proficiency from "./Proficiency";

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Talks/>
      <Proficiency/>
      <Project/>
      <Courses/>
      
      <Education/>
      
      <Contact/>
    </>
  )
}

export default App
