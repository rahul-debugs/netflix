import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Navbars from "./component/navbar";
import Wel from "./pages/welcome";
import Movies from "./pages/movies";
// import Footer from "./footer";


function App() {
 return(
  <>
  <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Wel />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
{/* <Footer/> */}
  </BrowserRouter>
</>
  
 )
}

export default App;