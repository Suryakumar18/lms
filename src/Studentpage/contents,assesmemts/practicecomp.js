

import { NavLink } from 'react-router-dom'

import React from 'react'
import TopicNav from './TopicNav'
import StudentSidemenu from '../components/Studentsidemnu/StudentSidemenu'
import Practicecompailer from '../codemirror/Codemirror'
import '../student.css'


function Practicecomp() {
  return (
    <div>
        <div className='std-nav'>
         <TopicNav />
        </div>
         <div className='std-menu'>
        <div style={{marginLeft:"280px",marginTop:"9px"}}>
        <NavLink  to="/topics" style={{color:"black",textDecorationLine:"none"}}>Back to Topics<i class="ri-arrow-left-fill"></i></NavLink>
        </div>
        </div>

        <div>
        
        </div>

        <div className='prac-compailer'>
            <Practicecompailer />
        </div>
    </div>
  )
}

export default Practicecomp