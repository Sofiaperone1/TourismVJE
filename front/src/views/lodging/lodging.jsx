import React from 'react'
import Footer from '../../components/footer'
import { DataLodging } from '../../helpers/lodging'
import ResumeCategory from '../../components/resumeCategory'
import "./lodging.css"

const Lodging = () => {

const unic_categorys = {};

const different_categorys = [];

DataLodging.forEach(e => {
  const category = e.category;

  if (!unic_categorys[category]) {
    unic_categorys[category] = true;
    different_categorys.push(category);
  }
});

console.log(different_categorys)

  return (
    <div className='lodgingCont'>
      <h3>HOSPEDAJES</h3>
      <h4>aca irian todas las opciones de hospedajes, que despues voy a separar por categorias (hoteles, deptos, etc)</h4>
   
      {different_categorys.map ((e) => (
        <ResumeCategory data={e}/>
      ))}

      <Footer/>
    </div>
  )
}

export default Lodging;