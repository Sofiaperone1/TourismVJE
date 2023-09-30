import './App.css';
import { Routes, Route,} from "react-router-dom";
import Home from "./views/home/home"
import Lodging from "./views/lodging/lodging";
import Attractions from "./views/attractions/attractions"
import Contact from "./views/contact/contact"
import Restaurants from "./views/restaurants/restaurants";
import Services from "./views/services/services"
import Navbar from "./components/navbar"

function App() {
  return (
        <div className='app'>
        <Navbar></Navbar>
        <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/lodging" element={<Lodging/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/restaurants" element={<Restaurants />} />

     {/*
     <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterScreen/>} />
     */} 
        
      </Routes>
     
        </div>

  
  );
}

export default App;