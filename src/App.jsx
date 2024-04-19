import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element= {<Register></Register>}></Route>
      <Route path="/Login" element= {<Login></Login>}></Route>
      <Route path="/home" element= {<Home></Home>}></Route>
    </Routes>
    </>
  )
 
}

export default App;
