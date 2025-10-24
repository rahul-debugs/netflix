import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Navbars from "./component/navbar";
import Wel from "./pages/welcome";
import Movies from "./pages/movies";
import About from "./pages/about";
import Footer from "./footer";
import Live from "./pages/live";
import Tvshow from "./pages/tvshow";
import Subscription from "./pages/subscription";
import Watchlist from "./pages/Watchlist";


function App() {
 return(
  <>
  <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Wel />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/about" element={<About />} />
      <Route path="/live" element={<Live />} />
      <Route path="/tvshow" element={<Tvshow />} />
      <Route path="/subscription" element={<Subscription/>} />
      <Route path="/watchlist" element={<Watchlist/>} />
    </Routes>
<Footer/> 
  </BrowserRouter>
</>
  
 )
}

export default App;