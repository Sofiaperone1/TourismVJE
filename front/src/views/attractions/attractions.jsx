import React from 'react'
import ResumeCategory from '../../components/resumeCategory'
import { Expeditions } from "../../helpers/expeditions"
import Footer from '../../components/footer'

const Attractions = () => {

  const unic_categorys = {};

  const different_categorys = [];
  
  Expeditions.forEach(e => {
    const category = e.category;
  
    if (!unic_categorys[category]) {
      unic_categorys[category] = true;
      different_categorys.push(category);
    }
  });
  
    return (
      <div className='lodgingCont'>
        <h3>ATRACCIONES</h3>
        <h4>aca irian todas las opciones de ATRACCIONES, que despues voy a separar por categorias (hoteles, deptos, etc)</h4>
     
        {different_categorys.map ((e) => (
          <ResumeCategory data={e}/>
        ))}
  
        <Footer/>
      </div>
    )
  }

export default Attractions;