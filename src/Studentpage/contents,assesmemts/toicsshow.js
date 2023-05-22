


import React from 'react'
import TopicNav from './TopicNav'
import Pdfs from './Pdfs'
import StudentSidemenu from '../components/Studentsidemnu/StudentSidemenu'

function TopicShow() {
  return (
    <div>
        <div>
        <TopicNav />
        </div>
        <div style={{marginLeft:"300px",marginTop:"30px",display:"flex",}}>
         <div style={{marginLeft:"-300px",marginTop:"-30px"}}>
        <StudentSidemenu />
        </div>
        <div style={{marginLeft:"180px"}}>
            <Pdfs />
            </div>
           
        </div>
    </div>
  )
}

export default TopicShow