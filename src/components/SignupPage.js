import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button, Row } from 'react-bootstrap';
import "../App.css"
import Saidbar from './Saidbar';
import { TextField } from '@mui/material';
import Description from './Description';
import Courses from './Courses';
export default function SignupPage() {
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(firstName && secondName && email && password && phone);
  }, [firstName, secondName, email, password, phone]);


  useEffect(() => {
    // استعادة البيانات المحفوظة من التخزين المحلي عند تحميل الصفحة
    const storedFirstName = localStorage.getItem('firstName');
    const storedSecondName = localStorage.getItem('secondName');
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');

    if (storedFirstName && storedSecondName && storedEmail && storedPhone) {
      setFirstName(storedFirstName);
      setSecondName(storedSecondName);
      setEmail(storedEmail);
      setPhone(storedPhone);
      setShowSignupPage(false);
      setShowWelcome(true);
    } else {
      setShowSignupPage(true);
      setShowWelcome(false);
    }
  }, []);

  const handleSignup = () => {
    // قم بإتمام عملية إنشاء الحساب هنا

    // حفظ البيانات في التخزين المحلي
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('secondName', secondName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    // عرض رسالة الترحيب
    setShowWelcome(true);
    setShowSignupPage(false);
  };

  const handleReset = () => {
    // إعادة تعيين الحقول وحذف البيانات من التخزين المحلي عند الضغط على زر إعادة التعيين
    setFirstName('');
    setSecondName('');
    setEmail('');
    setPassword('');
    setPhone('');
    
    setShowSignupPage(false);
    localStorage.removeItem('firstName');
    localStorage.removeItem('secondName');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
  };

  const showSignupForm = () => {
    setShowSignupPage(true);
    setShowWelcome(false);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            alt=""
            src="logo.jpg"
            width="200"
            height="50"
            className="d-inline-block align-top"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <Form className="d-flex">
              {!showWelcome ? (
                <React.Fragment>
                  {!showSignupPage ? (
                    <Button onClick={showSignupForm} className='mx-3' variant="outline-info">انشاء حساب جديد</Button>
                  ) : (
                    <Button className='mx-3' variant="outline-info">انشاء حساب جديد</Button>
                  )}
                  <Button variant="outline-info">تسجيل الدخول</Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Navbar.Text className="me-2">مرحبًا بك: {firstName}!</Navbar.Text>
                  <Button onClick={handleReset} variant="outline-info">إعادة التعيين</Button>
                </React.Fragment>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showSignupPage && !showWelcome && (
      <div className='content'>
      <div className='container'  >
          <Row style={{width:"300px",marginTop:"50px",marginBottom:"80px"}}>
           <h1>انشاء حساب جديد </h1>  
           
           <TextField className='input'  id="standard-basic" label="first name" variant="standard"   value={firstName} 
           onChange={e=>setFirstName(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="second name" variant="standard"  value={secondName}
           onChange={e=>setSecondName(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="email" variant="standard"        value={email}     
           onChange={e=>setEmail(e.target.value)} />
           <TextField className='input'  id="standard-basic" type='password' label="password" variant="standard"     value={password}  
           onChange={e=>setPassword(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="phone number" variant="standard" value={phone}
            onChange={e=>setPhone(e.target.value)} />
           <Button onClick={handleSignup} disabled={!isFormValid} >sign up</Button>
        </Row>        
        </div>
        </div>
      )}

      {showWelcome && (
        <>
        <Saidbar/>
       <Description/>
       <Courses/>
        </>
      )}
    </div>
  );
}