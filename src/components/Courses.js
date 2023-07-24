import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Slide } from "react-awesome-reveal";
import "../saidbar.css"
import { DataCourses } from './Datacourse';
import { Zoom } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

   
   
function Courses(setShowSignupPage) {
  
    

const DatacourseJsx= DataCourses.map((dataCourse)=>{
    return(
        
        <div key={dataCourse.id}>
       
        <div className='card-content'  style={{marginLeft:"23px",marginBottom:"60px"}}>
          <Slide className='slide'>
     <Card style={{ width: '18rem' , marginTop:"100px",textAlign:"center", }}>
     <Card.Img variant="top" src={dataCourse.imgUrl} />
     <Card.Body>
       <Card.Title className='font'>{dataCourse.title}</Card.Title>
       <Card.Text className='font'>
         {dataCourse.description}
       </Card.Text>

       <Button   className='font' variant="primary"><Link style={{color:"white",textDecoration:"none"}}  to={dataCourse.path}>{dataCourse.title}</Link> </Button>
     </Card.Body>
   </Card>
   </Slide>
   </div>
 
 </div>

    
    )
})

  return (
    <div style={{textAlign:"center"}}>
       <Zoom>
     <div className='classrooms' style={{marginTop:"70px"}}>
          <h1 className='font' style={{fontWeight:"bold"}}>الصفوف الدراسية</h1>
        </div>
        </Zoom>
   <div className='courses-container' style={{display:"flex",margin:"auto"}}>
    
   
    {DatacourseJsx}
    </div>
    </div>
  )
}

export default Courses