
import"../saidbar.css"
import React from 'react'
import  { useState, useEffect } from 'react';


function Saidbar() {
    const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < originalText.length) {
        setText((prevText) => prevText + originalText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 200);

    return () => {
        clearInterval(interval);
      };
    }, [index]);
  
    const originalText = 'Mr/Hossam Al-Haddad 😎💪🏻';

  return (
    <div className='said-containar' style={{height:"500px",marginTop:"50px",borderRadius:"30px" ,marginBottom:"50px"}} >
      <div className='said'>
     <h2 className="font">{text}</h2>
      </div>
    </div>
  )
}

export default Saidbar