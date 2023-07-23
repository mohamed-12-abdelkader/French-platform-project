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
      <div >
        <div className="logo">
   <div  style={ {display:"flex", justifyContent:"center",height:"80px",alignItems:"center", widows:"100%",marginBottom:"50px"}} >
    <img src="logo.jpg" style={{height:"60px",width:"300px"}}/>
   </div>
</div>
        <Container className="container-content"  style={{margin:"50px ",direction:"rtl",marginTop:"100px"}}>
            <div className="container-vedio" style={{display:"flex", flexWrap:"wrap",margin:"auto"}} >
               {vedioJsx}
            </div>
        </Container>
       <Footer/>
       </div>
        </>
    )
 }