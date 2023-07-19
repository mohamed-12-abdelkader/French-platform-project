import TextField from '@mui/material/TextField';
import "../App.css"
import React from 'react'
import Footer from './Footer';
import { Button, Row } from 'react-bootstrap'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState,useEffect} from 'react';
import {JackInTheBox} from "react-awesome-reveal";
import { Cities } from './Cities';

function Signup({showSignupPage,setEmail,setshowSignupPage,firstName,setFirstName,secondName,setSecondName,email,password,setPassword,phoneNumber,setPhoneNumber} ){
    
    const [open, setOpen] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    useEffect(() => {
        setIsFormValid(firstName && secondName && email && password && phoneNumber);
      }, [firstName, secondName, email, password, phoneNumber]);



      const handleSignup = () => {
        // قم بإتمام عملية إنشاء الحساب هنا
        localStorage.setItem('firstName', firstName);
    localStorage.setItem('secondName', secondName);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber);
   
    
        setshowSignupPage(true)
      };

      const handleClickOpen = () => {
        setOpen(true);
      };
     
      const handleClose = () => {
        setOpen(false);
      }; 

  
   const citiesJsx=Cities.map((city)=>{
    return(
     
     <MenuItem className='font' style={{fontSize:"30px"}} value={city.title}>{city.title}</MenuItem>
     
    ) })


  return (
    <>
  
  <Dialog
       
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        
        </DialogTitle>
        <DialogContent style={{textAlign:"center"}}>
          <JackInTheBox>
        <CheckCircleOutlineIcon style={{fontSize:"40px" ,color:"green",height:"50px",width:"50px"}}/>
        </JackInTheBox>
          <DialogContentText>
          
            <h2 className='font h2' style={{ direction:"rtl"}}>
           تم انشاء الحساب بنجاح 
            </h2>
            <h6 className='font'>
            اضغط على علامة الصح فى الاسفل للإستمرار
            </h6>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
        <IconButton aria-label="delete" onClick={handleSignup}  color="primary">
     <DoneAllOutlinedIcon style={{fontSize:"40px" ,color:"green"}}/>
</IconButton>
        </DialogActions>
      </Dialog>




    <div className='content'>
   <div className='container' >
   <Row style={{width:"300px",marginTop:"60px",marginBottom:"0px"}}>
           <h1 className='font'>انشاء حساب جديد </h1>  

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
           
           <FormControl  className='select' variant="standard" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-standard-label">City</InputLabel>
    <Select
     
     id="demo-simple-select-standard"
     value={age}
     onChange={handleChange}
     label="المدينة"
     style={{fontSize:"30px"}}
   >
  {citiesJsx}
  </Select>
</FormControl>
           <Button className='font' onClick={handleClickOpen} disabled={!isFormValid}>sign up</Button>
        </Row>        

  </div>

  </div>

   <Footer/>
  </>

)
}

export default Signup