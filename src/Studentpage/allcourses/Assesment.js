

import React from 'react'
import { NavLink } from 'react-router-dom'
import CourseNavbar from '../coursenavbar/Coursenavbar'
import Coursesnav from '../components/coursesnavbar/nav'
import CourseModules from '../contents,assesmemts/coursemodule'
import Backbutton from '../components/backbutton/Backbutton'

function CourseModule() {
  return (
    <div>
      <div style={{position:'relative'}}>
        <Coursesnav />
      </div>

      <div style={{position:"absolute",marginTop:"-52px",marginLeft:"20%"}}>
              <Backbutton path={"/allcourses"} name={'back to courses'} />
      </div>
<CourseModules />

       
    </div>


  )
}

export default CourseModule