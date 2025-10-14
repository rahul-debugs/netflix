import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Navbars from "./component/navbar";
import Wel from "./pages/welcome";

function App() {
 return(
  <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Wel />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App;
