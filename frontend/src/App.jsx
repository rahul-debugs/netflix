import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Navbars from "./component/navbar";
import Wel from "./pages/welcome";
import NoTransitionExample from "./pages/home"


function App() {
 return(
  
  // <BrowserRouter>
  //   <Navbars/>
  //   <Routes>
  //     <Route path="/" element={<Wel />} />
  //     <Route path="/auth" element={<Auth />} />
  //     <Route path="/home" element={<Home />} />
  //   </Routes>
  // </BrowserRouter>

<NoTransitionExample/>
  
 )
}

export default App;