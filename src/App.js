import React from 'react';
//import { Route,Routes } from 'react-router-dom';
import Hedear from './components/Hedear';
import Description from './components/Description';
import Signup from './components/Singup';
import Courses from './components/Courses';
import Saidbar from './components/Saidbar';
import Footer from './components/Footer';

import { useState,useEffect } from 'react';

function App() {

  const [showSignupPage,setShowSignupPage]=useState(false)

  const [firstName,setFirstName]=useState("")
  const [secondName,setSecondName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")

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
  
  
  return (
    <>
  <Hedear showSignupPage={showSignupPage} setshowSignupPage={setShowSignupPage} firstName={firstName} handleReset={handleReset} />
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
<Courses/>
<Footer/>
    </>:null}
    </>
  );
}
 
 
export default App;

