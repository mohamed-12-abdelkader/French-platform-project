import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Hedear from './components/Hedear';
import Description from './components/Description';
import Signup from './components/Singup';
import Courses from './components/Courses';
import Saidbar from './components/Saidbar';
import Footer from './components/Footer';
import Basics from './components/Basics';
import FirstGrade from './components/Firstgrade'
import SecondGrade from './components/SecondGrade';
import ThirdGrade from './components/ThirdGrade';
import {useEffect,useState } from 'react';


export default function Home( ){

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

 
    return(
        <>
<div onClick={handleAppClick} >
<Hedear handleClose={handleClose} open={open} secondName={secondName} showSignupPage={showSignupPage} setshowSignupPage={setShowSignupPage} firstName={firstName} handleReset={handleReset} setOpen={setOpen} />
     <Routes>
     
     <Route path='/' element={<>
  
   
   
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
<Courses showSignupPage={showSignupPage} setShowSignupPage={setShowSignupPage} />
<Footer/>
    </>:null}
    </>} />

     
     <Route path='/basics' element={<Basics/>}/>

     <Route path='/FirstGrade' element={<FirstGrade/>}/>
     <Route path='/SecondGrade' element={<SecondGrade/>}/>
     <Route path='/ThirdGrade' element={<ThirdGrade/>}/>

     </Routes>
     </div>
        </>
    )
}
