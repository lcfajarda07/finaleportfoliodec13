import React,{useState} from "react";
import { Button, Navbar,Menu,Item,Dropdown,Container} from "react-bulma-components";
import { Link } from "react-scroll";


const Navbars = props => {
  const [open, setOpen] = useState(false);  

  //hooks
  const [visible, setVisible] = useState(false);
  const [about, setAbout] =useState(false);
  const [projects, setProjects] =useState(false);
  const [contact, setContact] =useState(false);
 

  const aboutClickHandler = () =>{
    console.log("you clicked the about tab");
    setVisible(true);
    setAbout(true);
    setProjects(false);
    setContact(false);
    props.about();
  };
  const projectsClickHandler = () =>{
    console.log("you clicked the projects tab");
    setVisible(true);
    setAbout(false);
    setProjects(true);
    setContact(false);
    props.projects();
  };
  const contactClickHandler = () =>{
    console.log("you clicked the contact tab");
    setVisible(true);
    setAbout(false);
    setProjects(false);
    setContact(true);
    props.contact();
  };
   const landingClickHandler = () =>{
    props.landing();
  };


    return (
      <Navbar
       active={open} id="nav"
      >
        <Navbar.Brand>
            <Navbar.Item onClick={landingClickHandler}>
              <span><h1 id="nav"> lcf</h1></span>
            </Navbar.Item>
        <Navbar.Burger active={open} onClick={() => setOpen(!open)} />
          </Navbar.Brand>

        <Navbar.Menu >
         <Navbar.Container position="end">
            <Navbar.Item

              active={visible && about ? true : false}
              onClick={aboutClickHandler}
              className="nav-text is-uppercase is-active"
            >
             <h2 id="nav"> about me</h2>
            </Navbar.Item>
            <Navbar.Item
              active={visible && projects ? true : false}
              onClick={projectsClickHandler}
              className="nav-text is-uppercase"
            >
             <h2 id="nav">  project</h2>
            </Navbar.Item>
            <Navbar.Item
              active={visible && contact ? true : false}
              onClick={contactClickHandler}
              className="nav-text is-uppercase"
            >
              <h2 id="nav"> contact </h2>
            </Navbar.Item>
            </Navbar.Container>
          
        </Navbar.Menu>
      </Navbar>

      

  
    );

};

export default Navbars;