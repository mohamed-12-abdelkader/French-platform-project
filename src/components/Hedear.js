import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';

import { useState } from 'react';
function Hedear({firstName,showSignupPage,setshowSignupPage,handleReset}) {
  const [open, setOpen] = useState(false);
     
    function showCardClick(){
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false);
    }; 
    
  return (
    <>
    
    <Navbar expand="lg" style={{backgroundColor:"#ffffff",borderBottom:"solid 2px #ccc"}}>
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
         
            {showSignupPage ?<> <div style={{display:"flex"}}>
                   
                   <IconButton onClick={showCardClick} aria-label="delete"  color="primary" >
                      <AccountCircleIcon style={{height:"40px",width:"40px"}}/>
                    </IconButton>
            </div>
            

{open? (<div

className='card'  style={{position:"absolute",right:"10%",padding:"10px",marginRight:"10px",width:"200px",backgroundColor:"#f3f4f6",borderRadius:"20px"}} >
    <div style={{display:"grid"}}>
     <span className='font' style={{margin:"10px",fontWeight:"bold"}}>welcome:{firstName}</span> 
     <span className='font' style={{fontWeight:"bold",margin:" 10px"}}><PersonIcon/>my profile</span>
     <span>
     <IconButton onClick={handleReset} aria-label="delete"  color="primary" >
       <InputOutlinedIcon style={{height:"40px",width:"40px"}}/>
      </IconButton>
     
      </span>
      <span>
      <IconButton onClick={handleClose} aria-label="delete"  color="primary" >
       <CloseIcon style={{height:"40px",width:"40px"}}/>
      </IconButton>
      </span>
    </div>
    </div>):null}
            
   
  
           
            </>
            :<div> 
         <Button variant="outline-success" className='mx-2'>signup</Button>
         <Button variant="outline-success" className='mx-2' >login</Button>
          </div>}
        
          </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  
  </>
  )
}

export default Hedear
