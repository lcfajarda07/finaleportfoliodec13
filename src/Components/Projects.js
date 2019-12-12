import React from "react";
import {Columns,Button,Media,Item,Heading,Image,Content,Modal,OpenModal,Container,Section} from "react-bulma-components";
import {Card} from 'react-bootstrap';



const Projects = props => {
return(

<Container>
  <Columns>
  <Columns.Column size={2}>
  </Columns.Column>
    <Columns.Column size={8} xs={12} md={4}>
           <Card id="hcard" className="shadow" style={{ width: '58rem' }}>
        <Columns>
            <Columns.Column>
          <Card.Img variant="top"  id="imgsingers" src="/images/capstone1.png" class="fadeIn"/>
            </Columns.Column>
          <Columns.Column>
          <Card.Body>
          
            <Card.Title>my First Website</Card.Title>
                    
            <Card.Text>
           GoodNews Shirt Apparel
            </Card.Text>
            <div>
      
            <Button type="submit" id="book" variant="primary"> Visit website</Button>
          
            </div>
          </Card.Body>
           </Columns.Column>
        </Columns>
        </Card> 

        </Columns.Column>

         <Columns.Column size={2}>
  </Columns.Column>
  </Columns>

  <Columns>
  <Columns.Column size={2}>
  </Columns.Column>
    <Columns.Column size={8} xs={12} md={4}>
           <Card id="hcard" className="shadow" style={{ width: '58rem' }}>
        <Columns>
            <Columns.Column>
          <Card.Img variant="top"  id="imgsingers" src="/images/capstone2.png" class="fadeIn"/>
            </Columns.Column>
          <Columns.Column>
          <Card.Body>
          
            <Card.Title>Asset Management</Card.Title>
                    
            <Card.Text>
          LCF Audio and Video Rentals
            </Card.Text>
            <div>
      
            <Button type="submit" id="book" variant="primary"> Book Now</Button>
          
            </div>
          </Card.Body>
           </Columns.Column>
        </Columns>
        </Card> 

        </Columns.Column>

         <Columns.Column size={2}>
  </Columns.Column>
  </Columns>


  <Columns>
  <Columns.Column size={2}>
  </Columns.Column>
    <Columns.Column size={8} xs={12} md={4}>
           <Card id="hcard" className="shadow" style={{ width: '58rem' }}>
        <Columns>
            <Columns.Column>
          <Card.Img variant="top"  id="imgsingers" src="/images/cap3.png" class="fadeIn"/>
            </Columns.Column>
          <Columns.Column>
          <Card.Body>
          
            <Card.Title>Booking System</Card.Title>
                    
            <Card.Text>
           LCF Book Event Singers Online
            </Card.Text>
            <div>
      
            <Button type="submit" id="book" variant="primary"> Book Now<a href="https://whispering-lowlands-45279.herokuapp.com/"></a></Button>
          
            </div>
          </Card.Body>
           </Columns.Column>
        </Columns>
        </Card> 

        </Columns.Column>

         <Columns.Column size={2}>
  </Columns.Column>
  </Columns>
    </Container>


	);
};



export default Projects;