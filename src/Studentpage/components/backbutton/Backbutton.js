
import {NavLink} from "react-router-dom";
import React from 'react'

function Backbutton(props) {
  return (
    <div>

        <NavLink style={{background:'#17BF9E',color:"white",textDecorationLine:"none",width:"60px",height:"30px",padding:"4px",borderRadius:"5px"}} to={props.path}>{props.name}<i class="ri-arrow-left-line"></i></NavLink>


    </div>
  )
}

export default Backbutton