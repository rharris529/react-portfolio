import React, {useState} from "react";
import './App.css';
import Footer from '../src/components/Footer';
import Nav from "./components/Nav";
import Section from "./components/Section";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";

function App() {

  const [categories] = useState([
    {
      name: "About Me"
    },
    {
      name: "Projects"
    },
    {
      name: "Contact Me"
    },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (

    <div className="App">
      <Nav    
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
      <Section currentCategory={currentCategory}></Section>
      <ContactForm></ContactForm>
      <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
