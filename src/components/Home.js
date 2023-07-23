import React from 'react';
//import { Route,Routes } from 'react-router-dom';
import Hedear from './Hedear';
import Description from './Description';
import Signup from './Singup';
import Courses from './Courses';
import Saidbar from './Saidbar';
import Footer from './Footer';

import { useState,useEffect } from 'react';


export default function Home(){

    const [showSignupPage,setShowSignupPage]=useState(false)

  const [firstName,setFirstName]=useState("")
  const [secondName,setSecondName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [open, setOpen] = useState(false);


  useEffect(() => {
    // استعادة البيانات المحفوظة من التخزين المحلي عند تحميل الصفحة
    const storedFirstName = localStorage.getItem('firstName');
    const storedSecondName = localStorage.getItem('secondName');
    const storedEmail = localStorage.getItem('email');
    const storedPhoneNumber = localStorage.getItem('phoneNumber');

    if (storedFirstName && storedSecondName && storedEmail && storedPhoneNumber) {
      setFirstName(storedFirstName);
      setSecondName(storedSecondName);
      setEmail(storedEmail);
      setPhoneNumber(storedPhoneNumber);
      setShowSignupPage(true);
      
    } else {
      setShowSignupPage(false);
      
    }
  }, []);
  
  const handleReset = () => {
    // إعادة تعيين الحقول وحذف البيانات من التخزين المحلي عند الضغط على زر إعادة التعيين
    setFirstName('');
    setSecondName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    
    setShowSignupPage(false)
    localStorage.removeItem('firstName');
    localStorage.removeItem('secondName');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
  };
  
  const handleClose = () => {
    setOpen(false);
  };

const handleAppClick = () => {
    if (open) {
      handleClose();
    }
  };

  function click (){
    setShowSignupPage(false)
  }

    return(
        <>
<div onClick={handleAppClick} >
  <Hedear handleClose={handleClose} open={open} secondName={secondName} showSignupPage={showSignupPage} setshowSignupPage={setShowSignupPage} firstName={firstName} handleReset={handleReset} setOpen={setOpen} />
   
   
   {showSignupPage? "":<Signup showSignupPage={showSignupPage} 
   setshowSignupPage={setShowSignupPage}  
   firstName={firstName}
    setFirstName={setFirstName}
     secondName={secondName} 
   setSecondName={setSecondName}
   email={email}
   setEmail={setEmail}
   password={password}
   setPassword={setPassword}
   phoneNumber={phoneNumber}
   setPhoneNumber={setPhoneNumber}
  
   /> }
   {showSignupPage ?<>
   <Saidbar/>
   <Description/>
<Courses setShowSignupPage={click}/>
<Footer/>
    </>:null}
    </div>
     

        </>
    )
}


