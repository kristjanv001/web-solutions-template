import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import ScrollAnimation from "./ScrollAnimation";
import ProjectList from "./ProjectList";
import Pitch from "./Pitch";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
        <Hero />
        <ScrollAnimation />
      </header>
      <main>
        <ProjectList />
        <Pitch />
        <ContactForm />
      </main>
    </React.Fragment>
  );
}
