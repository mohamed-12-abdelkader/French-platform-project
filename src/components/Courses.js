import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Slide } from "react-awesome-reveal";
import "../saidbar.css"
import { DataCourses } from './Datacourse';
import { Zoom } from "react-awesome-reveal";
function Courses() {
  

const DatacourseJsx= DataCourses.map((dataCourse)=>{
    return(
        
        <>
       
        <div className='card-content' key={dataCourse.id} style={{marginLeft:"23px",marginBottom:"60px"}}>
          <Slide className='slide'>
     <Card style={{ width: '18rem' , marginTop:"100px",textAlign:"center", }}>
     <Card.Img variant="top" src={dataCourse.imgUrl} />
     <Card.Body>
       <Card.Title>{dataCourse.title}</Card.Title>
       <Card.Text>
         {dataCourse.description}
       </Card.Text>
       <Button variant="primary">{dataCourse.title}</Button>
     </Card.Body>
   </Card>
   </Slide>
   </div>
 
 </>

    
    )
})

  return (
    <div style={{textAlign:"center"}}>
       <Zoom>
     <div className='classrooms' style={{marginTop:"70px"}}>
          <h1>الصفوف الدراسية</h1>
        </div>
        </Zoom>
   <div className='courses-container' style={{display:"flex",margin:"auto"}}>
    
   
    {DatacourseJsx}
    </div>
    </div>
  )
}

export default Courses