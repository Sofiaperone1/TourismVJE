import React from 'react'
import { DataLodging } from '../helpers/lodging'
import ResumeCard from './resumeCard'
import "../views/lodging/lodging.css"

const ResumeCategory = ({data}) => {

  return (
    <div className='resumeCategory'>
    <p>{data}</p>
    <div>
    {
      DataLodging.map((e) => {
        if (e.category === data) {
          return <ResumeCard data={e}/>
     }})
    }
    </div>
    <button>see more +</button>
    </div>
  )
}

export default ResumeCategory