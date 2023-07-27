import { Container } from "react-bootstrap"
import Footer from "./Footer"
import LinksProfile from "./LinksProfile"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../components/LinksProfile.css"

import { Link,Outlet } from "react-router-dom";
export default function Profile (firstName, secondName,phoneNumber,email){
    return(
        <>
        
        <Container className="conatainer-profile" style={{width:"85%",margin:"80px auto"}}>
            
        <div className=" row">

        <div className="profail-user">
           <h5>الملف الشخصى </h5>
           <AccountCircleIcon className="icone"/>
       </div>

       <div className="container-aitem">

        <div className="aitem-1">
            <LinksProfile/>
        </div>
        <div className="aitem-2 ">
            <Outlet/>
        </div>
        
       </div>

        </div>
  


        </Container>

        <Footer/>
        </>
    )
}