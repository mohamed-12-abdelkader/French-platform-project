import TextField from '@mui/material/TextField';
import "../App.css"
import React from 'react'
import Footer from './Footer';
import { Button, Row } from 'react-bootstrap'

import { useState,useEffect} from 'react';

function Signup({showSignupPage,setEmail,setshowSignupPage,firstName,setFirstName,secondName,setSecondName,email,password,setPassword,phoneNumber,setPhoneNumber,handleSignup} ){
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(firstName && secondName && email && password && phoneNumber);
      }, [firstName, secondName, email, password, phoneNumber]);

      
      
      


 
  return (
    <>
  
    <div className='content'>
   <div className='container' >
   <Row style={{width:"300px",marginTop:"60px",marginBottom:"0px"}}>
           <h1>انشاء حساب جديد </h1>  
           
           <TextField className='input'  id="standard-basic" label="first name" variant="standard"   value={firstName} 
           onChange={e=>setFirstName(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="second name" variant="standard"  value={secondName}
           onChange={e=>setSecondName(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="email" variant="standard"        value={email}     
           onChange={e=>setEmail(e.target.value)} />
           <TextField className='input'  id="standard-basic" type='password' label="password" variant="standard"     value={password}  
           onChange={e=>setPassword(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="phone number" variant="standard" value={phoneNumber}
            onChange={e=>setPhoneNumber(e.target.value)} />
           <Button onClick={handleSignup} disabled={!isFormValid}>sign up</Button>
        </Row>        
        
  </div>

  </div>
  
   <Footer/>
  </>
 
)
}

export default Signup

