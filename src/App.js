import { Route,Routes } from "react-router-dom";
import Basics from "./components/Basics";
import Home from "./components/Home";
import FirstGrade from "./components/Firstgrade";
import SecondGrade from "./components/SecondGrade";
import ThirdGrade from "./components/ThirdGrade";

function App() {
  
  
  return (
    <>
   
     
  <Routes>
   <Route path="/" element={<Home   />} />
    <Route path='/basics' element={ <Basics/>} />
    <Route path="/FirstGrade" element={<FirstGrade/>}/>
    <Route path="/SecondGrade" element={<SecondGrade/>}/>
    <Route path="/ThirdGrade" element={<ThirdGrade/>}/>
  </Routes>

    </>
  );
}
 
 
export default App;