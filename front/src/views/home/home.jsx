import React from 'react'
import './home.css'
import sm1 from '../../imgs/sm1.png'
import Footer from '../../components/footer'
import avion1 from '../../imgs/avion1.png'
import sombrilla1 from '../../imgs/sombrilla1.png'
import brujula1 from '../../imgs/brujula1.png'
import Divider from '@mui/material/Divider';
import iconoEstrella from "../../imgs/iconoEstrella.png"
import BannerVideo from '../../components/bannerVideo'
import l1 from "../../imgs/lodging/l1.jpg"
import l2 from "../../imgs/lodging/l2.jpg"
import l3 from "../../imgs/lodging/l3.jpg"
import l4 from "../../imgs/lodging/l4.jpg"


const Home = () => {


  return (
    <div className='home'>
     
    
<BannerVideo/>
        <div className='seccion-titles'> 
        <p >
        ¡WELCOME TO OUR HAPPY ISLAND! 
        </p>
        <div>
        <Divider orientation="horizontal" variant="middle" flexItem />
        <img src={iconoEstrella} alt="" />
        <Divider orientation="horizontal" variant="middle" flexItem />
        </div>
        <h4>
        We are excited to receive all the tourists who visit us with warmth, gratitude and above all, with safety and well-being, which are our most important priority.
        </h4>
        </div>
        
        <div className='seccion1-home'>
        <div>
        <h1 className='seccionTitle'>A little history</h1>
            <p data-aos="fade-down-right" >La isla de St. Maarten/St. Martin se encuentra en la conjunción del Ocean Atlántico con el mar Caribe, a 3 horas 30 de Miami, 3 horas de Panamá y 45 minutos de Puerto Rico.
            Consta de 96 Km2 y esta dividida entre dos países aproximadamente en partes iguales
            <button data-aos="fade-up-right"> LEARN MORE ABOUT US </button>
            </p>
        </div>
            <img data-aos="fade-left" src={sm1} alt="img-caribe" />
        </div>
        <div className='seccion12-home'>
            <div className='lodgingPics'>
              <img src={l1} alt="l1" />
              <img src={l2} alt="l2" />
              <img src={l3} alt="l3" />
              <img src={l4} alt="l4" />
            </div>
            <div className='lodgingText'>
            <h1 className='seccionTitle'>Lodging for every taste</h1>
            <p>Discover the most exclusive accommodation on the island in the hands of your trusted company at the best price we can offer you</p>
            <ul>
              <li>Something about the ubication</li>
              <li>Something about the price</li>
              <li>Something about the resort</li>
              <li>Something about the food</li>
            </ul>
            <button> SEE MORE LODGING</button>
            </div>
        </div>
        <div className='seccion2-home'>
           
            <p>
              
              Al Sur, el País St. Maarten, parte del Mancomunado de los Países Bajos, con gobierno autónomo desde el 10/10/2010.
              El Norte, St. Martin es parte de Francia con ciertas ventajas impositivas.
              Si bien hay una frontera, no hay ningún control y desde 1648, todavía en época colonial,  el tráfico de personas y mercaderías es libre, sin ningún tipo de control en las Fronteras.</p>
        </div>
     <div className='seccion3-home'>
        <h1>TUS PROXIMAS VACIONES EN SAN MARTIN</h1>
        <h3>¡Queremos que crees recuerdos especiales con quienes más quieres! Por eso, compartimos contigo las razones por las cuales debes escogernos para disfrutar tus próximas vacaciones en nuestra Isla Feliz. </h3>
     </div>
      <div className='seccion4-home'>
        <div>
        <div >
          <img src={avion1} alt="" />
          <h1>FACIL</h1>
         <p>En San Martin recibimos cruceros y más de 100 vuelos directos de ciudades importantes.</p>
        </div>
        <div>
          <img src={sombrilla1} alt="" />
          <h1>COMODO</h1>
          <p>Hablamos en cuatro idiomas y tenemos más días soleados que otras islas del Caribe.</p>
        </div>
        <div>
          <img src={brujula1} alt="" />
          <h1>EXPLORABLE</h1>
          <p>La isla es pequeña, segura, moderna y puede convertirse en un lugar para divertirte.</p>
        </div>
        </div>
      </div>

    <Footer></Footer>
     </div>


  )
}

export default Home