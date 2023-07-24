
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import "../saidbar.css"

export default function FirstGrade (){
    return(
        <>
        
   <Container>
         <div style={{display:"flex",justifyContent:"center", alignItems:"center",height:"80vh"}}>
                   <h1 className="font" style={{fontWeight:"bold"}}>سوف يتم توفير الكورسات  فى اقرب وقت </h1>
         </div>
 </Container>        
  <Footer/>
        </>
    )
}