import React from 'react'
import "../views/lodging/lodging.css"


const ResumeCard = ({data}) => {
  return (
    <div className='resumeCard'>
     <h3>{data.name}</h3>
     <p>{data.location}</p>
     <img src={data.img} alt="image off the views" />

    </div>
  )
}

export default ResumeCard