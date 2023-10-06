import React from 'react'
import Footer from '../../components/footer'
import Divider from '@mui/material/Divider';
import "./contact.css"
import Calendar from '../../components/calendar';
import { useDispatch, useSelector } from 'react-redux';
import { removeDate, addDate, selectDate } from '../redux/actions'; // Asegúrate de importar la acción correcta y el estado global.


const Contact = () => {

  const selectedDates = useSelector((state) => state.selectedDates);
  
  const dispatch = useDispatch();

  /*
  const handleSelectDate = (day) => {
    // Verifica si la fecha ya está seleccionada
    if (selectedDates.includes(day)) {
      // Si ya está seleccionada, elimínala del estado global
      dispatch(removeDate(day));
    } else {
      // Si no está seleccionada, agrégala al estado global
      dispatch(addDate(day));
    }
  }; 
*/

 return (
 <div style={{marginTop:"200px"}} className='contact'>
  <Calendar/>
  <button onClick={() => console.log("reservar esta fecha: ")}>RESERVAR</button>
 </div>
 )
}

export default Contact;



/* return (
    <div className='contactanos'>
    <div className='formContent'>
    // <Form/>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className='Gmaps'>
         <MapsForm/>
         <div className='sucursalesText'>
          <h3>Tambien nos podes encontrar en:</h3>
            <p>Sucursal : Los Tilos 2376, Tandil, Bs.As, Arg </p>
            <p>Telefono: +5492494007721</p>
            <p>Horario de atencion: Todos los dias, las 24 hs </p>
          </div> 
      </div>
      </div>
      <Footer/>
   </div>
  )*/