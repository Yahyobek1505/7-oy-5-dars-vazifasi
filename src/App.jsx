// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
// const counter =useSelector((state) => state.counter.value)
// const dispatch =useDispatch()

  return (
    <>
    <Routes>
      <Route path="/register" element= {<Home></Home>}></Route>
      <Route path="/Login" element= {<Login></Login>}></Route>
      <Route path="/Register" element= {<Register></Register>}></Route>
    </Routes>
    </>
  )
 
}

export default App;
