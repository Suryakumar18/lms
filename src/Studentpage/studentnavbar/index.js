import React,{useRef} from "react";
import "../student.css"
import { Container } from "reactstrap";
import Item from "antd/es/list/Item";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from 'react';
import { Badge, Button, Image, Space, Typography } from "antd"




const Student =()=>{

    const menuRef = useRef()

    const menuToggle =()=> menuRef.current.classList.toggle('active__menu')


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





    return(
        <div className="studentheader">
       
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h2 className="d-flex align-items-center"><i style={{color:"#17bf9e"}} class="ri-pantone-line"></i>Vidhai</h2>
                    </div>

                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                
                                   
                                        <li  className="nav__item">
                                        <a href="#">Home</a>
                                    </li>

                                    <li  className="nav__item">
                                        <a href="#">Blogs</a>
                                    </li>

                                    <li  className="nav__item">
                                        <a href="#">Pages</a>
                                    </li>

                                    <li  className="nav__item">
                                        <a href="#">About</a>
                                    </li>

                                    <li  className="nav__item">
                                        <NavLink to="/allcourses">Courses</NavLink>
                                    </li>
                                 
                     
                            </ul>

                        </div>

                        <div className="nav__right">
                                <p className="mb-0 d-flex align-items-center gap-2"><i class="ri-phone-line"></i>229299292</p>

                        </div>
                        <nav >
                                <Button onClick={logoutHandler}>Logout</Button>
                            </nav>
                            <div className="mobile__menu">
                                <span><i class="ri-menu-line" onClick={menuToggle}></i></span>

                        

                            </div>
                    </div>

                </div>
            </Container>
        

        </div>
    )
    
}


export default Student;