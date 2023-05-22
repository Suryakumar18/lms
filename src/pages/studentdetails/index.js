import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';


function StudentDeatils(){

    const history = useNavigate()
  
    useEffect(()=>{
        if(!localStorage.getItem('auth')) history('/')
      },[])
        return <div>

            <Typography.Title level={4}>StudentDetails</Typography.Title>
        </div>
}
export default StudentDeatils;