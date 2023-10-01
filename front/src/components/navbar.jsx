import React from 'react'
import './components.css'
import logo1 from '../imgs/logo1.jpeg'
import { useState } from 'react';
import {NavLink } from 'react-router-dom';


 const Navbar = () => {

  const [navbar, setNavbar] = useState (false);

const changeBackground = () => {
  if (window.scrollY >= 80 ) 
     {setNavbar(true)}

  else {setNavbar(false)}
}
window.addEventListener ('scroll', changeBackground);
 
//<img src={logo1} className= {navbar ? 'logo active' : 'logo'} alt='logoGea' />
return (

 <div className={navbar ? 'nav-container active' : 'nav-container'}>
    <div className={navbar ? 'atentionHours active' : 'atentionHours'}>     <img src={logo1} alt="" /> <p>Nuestro horario de atencion es de 24 horas todos los dias</p></div>
        <div className= {navbar ? 'navbar active' : 'navbar'} >


        <ul>

    <li id="serviceslink" className='dropdown-menu'><NavLink to="/services"> TRANSPORT </NavLink> 
   
    </li>
   <li> <NavLink to="/restaurants"> RESTAURANTS</NavLink> </li>
  
     <li  className='dropdown-menu'> <NavLink to="/lodging">LODGING</NavLink>
     <ul>
        <li><a href="/lodging">Hotels & Resorts</a></li>
        <li><a href="/lodging">Houses & Villas</a></li>
        <li><a href="/lodging">Apartments</a></li>
      </ul>
    </li>

    <li><NavLink to="/contact"> CONTACT US</NavLink></li>

   
    

    <li  className='dropdown-menu'> <NavLink to="/attractions">ATTRACTIONS</NavLink>
    <ul>
          <li><a href="actividadesAcuaticas">Water activities</a></li>
          <li><a href="">Night life</a></li>
          <li><a href="">Land activities</a></li>
        </ul>
  </li>
   <li className='homelink'><NavLink to="/">HOME </NavLink></li>
   
  
  </ul>



 </div>
    </div>
  )
} 




export default Navbar


/*


 <ul>
        <li><a href="/hospedajes">Cabañas</a></li>
        <li><a href="/hospedajes">Hoteles</a></li>
        <li><a href="/hospedajes">Deptos</a></li>
      </ul>

    <ul>
          <li><a href="actividadesAcuaticas">Actividades acuaticas</a></li>
          <li><a href="">Actividades nocturnas</a></li>
          <li><a href="">Paseos por la isla</a></li>
        </ul>
import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

  
const Navbar = () => {
  
  return (

    <div className='nav-area'>

<h1>LOGO T</h1>

   <ul>
   <li><HomeIcon/> <NavLink to="/">Home </NavLink></li>
   <li className='dropdown-menu'><RoomServiceIcon/><NavLink to="/servicios"> Servicios</NavLink> 
    <ul>
          <li><a href="servicioDe">Servicio de transporte</a></li>
          <li><a href="servicioDe">Servicio de </a></li>
        </ul>
    </li>
    <li><EmailIcon/><NavLink to="/contactanos"> Contactanos</NavLink></li>

    <li  className='dropdown-menu'> <HikingIcon/><NavLink to="/atracciones">Atracciones</NavLink>
    <ul>
          <li><a href="actividadesAcuaticas">Actividades acuaticas</a></li>
          <li><a href="">Actividades nocturnas</a></li>
          <li><a href="">Paseos por la isla</a></li>
        </ul></li>
       
     <li  className='dropdown-menu'> <HotelIcon/><NavLink >Hospedajes</NavLink>
        <ul>
        <li><a href="/hospedajes">Cabañas</a></li>
        <li><a href="/hospedajes">Hoteles</a></li>
        <li><a href="/hospedajes">Deptos</a></li>
      </ul>
    </li>
 <li> <RestaurantIcon/><NavLink to="/restaurantes"> Restaurantes</NavLink> </li>
   
   
  
  </ul>
  
  </div>

)
}

export default Navbar;  */
