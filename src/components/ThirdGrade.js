import { Container } from "react-bootstrap"
import Footer from "./Footer"
import "../saidbar.css"

export default function ThirdGrade (){
    return(
        <>
        <div className="logo">
   <div  style={ {display:"flex", justifyContent:"center",height:"80px",alignItems:"center", widows:"100%",marginBottom:"50px"}} >
    <img src="logo.jpg" style={{height:"60px",width:"300px"}}/>
   </div>
</div>
   <Container>
    
    <div style={{display:"flex",justifyContent:"center", alignItems:"center",height:"80vh"}}>

<h1 className="font" style={{fontWeight:"bold"}}>سوف يتم توفير الكورسات  فى اقرب وقت </h1>

    </div>
    
    
    </Container>        


        <Footer/>
        </>
    )
}