import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Offcanvas,Button,OffcanvasHeader,OffcanvasBody } from 'reactstrap'
import { CButton,COffcanvas,COffcanvasHeader,COffcanvasTitle,CCloseButton,COffcanvasBody } from '@coreui/react'
import { useState } from 'react'
import {NavLink} from "react-router-dom";
import React from 'react'
import "../../student.css"
function StudentSidemenu() {

   
    return (
      <>
        <div style={{background:"white",width:"200px"}}>
    
   
            <div style={{display:"flex",flexDirection:"column",textAlign:"left",marginLeft:"40px",borderRight:"2px solid black"}}>
                
                    <NavLink to='/topicshow'  className='studentnav-links' style={{textDecorationLine:"none",color:"black"}} >Pdf Content</NavLink>
                    <NavLink to='/coursevideos' className='studentnav-links' style={{textDecorationLine:"none",marginTop:"10px",color:"black"}} >Videos</NavLink>
                    <NavLink to='/practicecomp' className='studentnav-links' style={{textDecorationLine:"none",marginTop:"10px",color:"black"}}>PracticeQuestions</NavLink>
                    <NavLink className='studentnav-links' style={{textDecorationLine:"none",marginTop:"10px",color:"black"}}>Assesments</NavLink>
                 
                
             </div>
             </div>
      
      </>
    )
}

export default StudentSidemenu