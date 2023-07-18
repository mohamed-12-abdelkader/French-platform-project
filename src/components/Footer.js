import React from 'react'
import { Container } from 'react-bootstrap'
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../saidbar.css"
function Footer() {
  return (
    <div style={{height:"200px" ,backgroundColor:"#294d61",}}>
        <Container style={{display:"flex",justifyContent:"center"}} >
        
           <div className='footer-content' style={{textAlign:"center"}}  >
           <div>
             <IconButton aria-label="delete" href='https://www.facebook.com/leprofHossamElHadad?mibextid=ZbWKwL'>
                    <FacebookIcon style={{color:"white" ,fontSize:"50px"}}/>
             </IconButton>
           <IconButton   color="primary">
                    <YouTubeIcon style={{color:"#f00" ,fontSize:"50px"}} />
            </IconButton>
            <p></p>
             </div>
             
               <h3 className='font' >💪🏻🤍الم الدراسة لحظة وينتهي ، ولكن الم تركها يستمر مدي الحياة🤍💪🏻</h3>
           </div>
        </Container>
    </div>
  )
}

export default Footer