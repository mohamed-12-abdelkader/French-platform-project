import React from 'react'
import { Container, } from 'react-bootstrap'
import "../saidbar.css"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RepeatIcon from '@mui/icons-material/Repeat';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Slide } from "react-awesome-reveal";
import {Zoom} from "react-awesome-reveal";
function Description() {
  return (
    <Container>
     
         <div className='description'>
        <div className='icon-div'> 
        <Slide>
             <div className='icon' style={{backgroundColor:"#294d61"}}>
                <AccessAlarmIcon style={{position:"relative",fontSize:"150px",color:"white",top: "13%",left:"14%"}}/>
             </div>
      </Slide>
             <Zoom>
             <h5>وفر وقتك</h5>
             </Zoom>
        </div >
        <div className='icon-div'>
          <Slide>
             <div className='icon'style={{backgroundColor:"#6da5c0"}}>
                <RepeatIcon style={{position:"relative",fontSize:"150px",color:"white",top: "13%",left:"14%"}}/>
             </div>
             </Slide>
             <Zoom>
             <h5 style={{backgroundColor:"#6da5c0"}}>شاهد دروسك اكثر من مرة</h5>
             </Zoom>
        </div >
        <div className='icon-div'>
          <Slide>
             <div className='icon' style={{backgroundColor:"#86a8cf"}}>
                <AutoStoriesIcon style={{position:"relative",fontSize:"150px",color:"white",top: "13%",left:"14%"}}/>
             </div>
          </Slide>
             <Zoom>
             <h5 style={{backgroundColor:"#86a8cf"}}>احضر امتحانات دورية و مستمرة</h5>
             </Zoom>
        </div>
         </div>
         
    </Container>
  )
}

export default Description