import React, {useState} from 'react';
import './App.css';


import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button,Hero ,Container ,Heading} from "react-bulma-components";

//components
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import HeroFooter from './Components/HeroFooter';
import Navbars from './Components/Navbar';
import Landing from './Components/Landing';
import ImageSlider from "./Components/ImageSlider";


function App() {
  //hooks
  const [whichComponentToShow, setComponentToShow]=useState("landing");
  const landingClickHandler = () => {
    setComponentToShow("landing");
  };
   const aboutClickHandler = () => {
    setComponentToShow("about");
  };
   const contactClickHandler = () => {
    setComponentToShow("contact");
  };
   const projectsClickHandler = () => {
    setComponentToShow("projects");
  };

  if(whichComponentToShow === "about"){
     return (
   
   <Hero size="fullheight" id="aboutcontainer">
  <Navbars about={aboutClickHandler} projects={projectsClickHandler
      } contact={contactClickHandler} landing={landingClickHandler}/>
      <Hero.Body>
     
         <About/>
      </Hero.Body>
  
   </Hero>


  );
} else if(whichComponentToShow === "projects") {
         return (
   <Hero size="fullheight" id="projectcontainer">
      <Navbars about={aboutClickHandler} projects={projectsClickHandler
      } contact={contactClickHandler} landing={landingClickHandler}/>
          <div class="cent">
        
         </div>
      <Hero.Body>

         <Projects/>

        
      </Hero.Body>

   </Hero>

  );



} else if(whichComponentToShow === "contact") {
         return (
   <Hero size="fullheight" id="contactcontainer">
     <Navbars about={aboutClickHandler} projects={projectsClickHandler
      } contact={contactClickHandler} landing={landingClickHandler}/>
      <Hero.Body>
         <Contact/>
      </Hero.Body>

   </Hero>

  );

} else if(whichComponentToShow === "landing"){

   return (
   <Hero size="fullheight" id="bglanding">
    	<Navbars  about={aboutClickHandler} projects={projectsClickHandler
      } contact={contactClickHandler} landing={landingClickHandler}/>
      <Hero.Body>
      <Container className="has-text-left" id="typewriter">
            <Heading size={1}>
              <h1 className="has-text-left">
               Hello World
              </h1>
              <h1 className="heading-text has-text-left">
                my Name Is
              </h1>
              <h1 className="heading-text has-text-left">Lemuel Fajarda</h1>
            </Heading>
         
           		<h3>
            Full Stack Developer</h3>
         
            <Heading className="has-text-left" id="margin">
              <Button  onClick={contactClickHandler}>
                Contact me
              </Button>

              
            </Heading>
            <Heading size={5}>

            <i id="i1" class="devicon-facebook-plain"></i>
            <i id="i1" class="devicon-twitter-plain"></i>
            <i id="i1" class="devicon-google-plain"></i>
         
      
            </Heading> 

          </Container>

      </Hero.Body>
   </Hero>

  );

  }return null;
}





export default App;
