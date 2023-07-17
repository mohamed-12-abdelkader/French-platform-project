import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Hedear({firstName,showSignupPage,setshowSignupPage,handleReset}) {
    
    console.log(firstName)
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container >
      <img alt=""
            src="logo.jpg"
            width="200"
            height="50"
            className="d-inline-block align-top"
            />
            
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>

        <div>
            {showSignupPage ? <div style={{display:"flex"}}>
                   <h3>welcome:{firstName}</h3>
                   <Button variant="outline-success" className='mx-3' onClick={handleReset}>log out</Button>
            </div> :<div> 
         <Button variant="outline-success" className='mx-2'>signup</Button>
         <Button variant="outline-success" className='mx-2' >login</Button>
          </div>}
        
          </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}

export default Hedear