import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SideMenu from '../../components/SideMenu';
import AppHeader from '../../components/AppHeader';
import img1 from "../../Studentpage/stimages/about-us.png"
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Modal, { modalClasses } from '@mui/material/Modal';
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
import { Breadcrumb, Space } from 'antd';
import draftToHtml from "draftjs-to-html";
import TextEditor2 from '../addcourses/texteditor2'
import axios from 'axios'
import  Breadcrumbsall from "../../components/breadcum/Breadcum"
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'










function Edittopics() {
    const navigate = useNavigate()
    const location = useLocation()
  const  topicid = location.pathname.split('/')[3]
  const  moduleid = location.pathname.split('/')[2]
  console.log(topicid)

    const [courses,setCourses] = useState({
        moduleid:moduleid,
        topicname:"",
        desc:"",
        video:"",
        pdf:""
})

const handlechange =(e)=>{
setCourses(prev=>({...prev,[e.target.name]:e.target.value}))
}

const handleClick = async (e) =>{
e.preventDefault()

try{
  await axios.put(`http://localhost:8800/updatetopics/${moduleid}/${topicid}`,courses);
  toast.success("data updated successfully")
  navigate(`/addnewtopics/${moduleid}`)
 
  
}catch(err){
  console.log(err)
}

}
console.log(courses)







  return (




    <div>
    
  
  <div>
    <AppHeader />
  </div>

<div style={{display:"flex"}}>
    <div >
        <SideMenu />
    </div>
    
        <div style={{marginLeft:"340px",marginTop:"80px"}}>


        <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput style={{width:"500px"}} onChange={handlechange} id='form6Example2' value={moduleid} type='text' label='moduleid' name='moduleid' />
      </MDBCol>
    </MDBRow>



    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput style={{width:"500px"}} onChange={handlechange} id='form6Example2' type='text' label='topicName' name='topicname' />
      </MDBCol>
    </MDBRow>

      <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput style={{width:"500px"}} onChange={handlechange} id='form6Example2' type='text' label='topicDesc' name='desc' />
      </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
      <MDBCol>
      <MDBFile onChange={handlechange}  name='video' label='Add video' id='customFile' />
      </MDBCol>
    </MDBRow>

    <MDBRow className='mb-4'>
      <MDBCol>
      <MDBFile onChange={handlechange}  name='pdf' label='Add pdf' id='customFile' />
      </MDBCol>
    </MDBRow>
    

    {/* <MDBFile label='Course Image' id='customFile' />
    <MDBInput wrapperClass='mb-4' type='tel' id='Duration' label='Total hours' style={{marginTop:"30px"}} />

<div style={{}}>
    <TextEditor2 />
 </div> */}


    <MDBBtn className='mb-2' onClick={handleClick} block style={{marginTop:"20px"}}>
      Update
    </MDBBtn>
    </div>
    </div>
    </div>
    
  )
}

export default Edittopics