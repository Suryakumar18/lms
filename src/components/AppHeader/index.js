
import { Badge, Button, Image, Space, Typography } from "antd"
import vidhai from "../Images/vidhai.png"
import {BellFilled, MailOutlined} from "@ant-design/icons"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function AppHeader(){


    const history = useNavigate()
    const [logout,setLogout] = useState(false)
    useEffect(()=>{
        if(!localStorage.getItem('auth')) history('/')
    },[logout])


    const logoutHandler =(e)=>{
        e.preventDefault();
        localStorage.removeItem("auth");
        setLogout(true)
    }



    return <div className="AppHeader" style={{background:"#363a41",position:"sticky !important"}}>

        <Image width={40} src={vidhai}  />
        <Typography.Title style={{color:"white",fontSize:"19px"}}>Admin's DashBoard</Typography.Title>
        <Space>
            <div style={{marginLeft:"-130px"}}>
                <Badge >
                         <MailOutlined style={{fontSize:24,color:"white",marginRight:"20px"}} />
                </Badge>

                <Badge count={20}>
                         <BellFilled style={{fontSize:24,color:"white"}} />
                </Badge>
            </div>

                <nav >
                    <Button onClick={logoutHandler}>Logout</Button>
                </nav>
                
            
            
        </Space>

    </div>
}


export default AppHeader