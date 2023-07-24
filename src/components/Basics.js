import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { Vedios } from "./Databasicvedio";
import "../saidbar.css"

 export default function Basics(){

 const vedioJsx=Vedios.map((vedio)=>{
  return(
    <div key={vedio.id} style={{ height:"auto", width:"450px",textAlign:"center",margin:"auto",marginBottom:"20px"}}>
    <div >
     <video className="vedio" controls controlsList="nodownload  "  style={{height:"300px", width:"450px"}} >
       <source src={vedio.vedioSrc}  type="video/mp4"  />
      
     
     </video>       
    <h1 className="font">{vedio.title}</h1>
      </div>
    </div>
  )
 })

    return(
      <>
      
      

        <Container className="container-content"  style={{margin:"50px ",direction:"rtl",marginTop:"15px"}}>
            <div className="container-vedio" style={{display:"flex", flexWrap:"wrap",margin:"auto"}} >
               {vedioJsx}
            </div>
        </Container>
       <Footer/>
       
        </>
    )
 }