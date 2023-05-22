
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SideMenu from '../../components/SideMenu';
import AppHeader from '../../components/AppHeader';
import img1 from "../../Studentpage/stimages/about-us.png"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,MDBFile
} from 'mdb-react-ui-kit';
import TextEditor from '../../components/texteditor';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState,convertToRaw } from 'draft-js';
import { Space } from 'antd';
import draftToHtml from "draftjs-to-html";
import CourseNavbar from '../coursenavbar/Coursenavbar';
import Coursesnav from '../components/coursesnavbar/nav';
import backimg from "../stimages/light.jpg"
import "../../App.css"
import {useRef} from "react";
import { Container } from "reactstrap";
import Item from "antd/es/list/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  { useEffect} from 'react';
import { Badge, Image} from "antd"
import Pdfs from './Pdfs';
import VideoComp from './VideoComp';
import TopicNav from './TopicNav';
import { CCardBody ,CCard,CCardHeader,CCardTitle,CCardText,CButton} from '@coreui/react';
import axios from "axios";
import {Link,useLocation} from "react-router-dom";


  
  const Coursetopics=()=> {


  const location = useLocation()
  const moduleid =   location.pathname.split('/')[2]
  console.log(moduleid)
 

  const [topics,settopics] = useState([]);
  const fetchAllbooks = async()=>{
    try{
        const res = await axios.get(`http://localhost:8800/coursetopic/${moduleid}`)
        settopics(res.data);
    }catch(err){
      console.log(err)
    }
  }
  React.useEffect(()=>{


      fetchAllbooks()
  },[]);
    
    return (
        <div className='Topics-container' style={{width:"100%",height:"720px"}} >
        <TopicNav />
  
        {topics.map((item) => (
                <section style={{marginTop:"40px",width:"80%",marginLeft:"200px"}}>
                <CCard>
                        <CCardHeader style={{background:"green",color:"white"}}>{item.topicname}</CCardHeader>
                        <CCardBody>
                        
                        <CCardText>{item.desc}</CCardText>
                        <CButton><NavLink to="/topicshow" style={{color:"white",textDecorationLine:"none"}}>start</NavLink></CButton>
                        </CCardBody>
                </CCard>
            
            </section>
          ))}
      </div>
      
    )
  }
  
  export default Coursetopics


  



function TopicsDesign(props){
  const{id,title,description,name} = props.item
  return(
    <div >
            
    <section style={{marginTop:"40px",width:"80%",marginLeft:"200px"}}>
    <CCard>
            <CCardHeader style={{background:"green",color:"white"}}>{title}</CCardHeader>
            <CCardBody>
            <CCardTitle>{name}</CCardTitle>
            <CCardText>{description}</CCardText>
            <CButton><NavLink to="/topicshow" style={{color:"white",textDecorationLine:"none"}}>start</NavLink></CButton>
            </CCardBody>
    </CCard>

</section>
  </div>
  )
}


















