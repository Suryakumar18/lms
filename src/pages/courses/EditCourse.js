import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SideMenu from '../../components/SideMenu';
import AppHeader from '../../components/AppHeader';
import img1 from "../../Studentpage/stimages/about-us.png"
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
import { Breadcrumb, Space } from 'antd';
import draftToHtml from "draftjs-to-html";
import TextEditor2 from '../addcourses/texteditor2'
import axios from 'axios'
import  Breadcrumbsall from "../../components/breadcum/Breadcum"
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'

const EditCourse = () => {

 
  return (

    <div>
      <AppHeader />
      <div style={{display:"flex"}}>
      <div>
        <SideMenu />
      </div>

        <div style={{marginLeft:"320px",marginTop:'100px'}}>
            <h3>Update your Coures</h3>
        <AddModuleForms />
        </div>
    </div>
    </div>
  );
}

































 function AddModuleForms() {

  const [courses,setCourses] = useState({
    courseid:"",
    title:"",
    desc:"",
    cover:""
  })

  const navigate = useNavigate()
  const location = useLocation()
  const id =   location.pathname.split('/')[2]


  const handlechange =(e)=>{
    setCourses(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick = async (e) =>{
    e.preventDefault()

    try{
      await axios.put(`http://localhost:8800/books/${id}`,courses);
      toast.success("updated")
      navigate('/Courses')
    }catch(err){
      console.log(err)
    }

  }
  console.log(courses)
  return (
    <div>
      
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput style={{width:"500px"}} onChange={handlechange} id='form6Example1' type='text' label='Courseid' name='courseid' />
      </MDBCol>
    </MDBRow>
      
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput onChange={handlechange} id='form6Example2' type='text' label='CourseName' name='title' />
      </MDBCol>
    </MDBRow>

      <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput onChange={handlechange} id='form6Example2' type='text' label='CourseDesc' name='desc' />
      </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput onChange={handlechange} id='form6Example2' type='text' label='CourseCover' name='cover' />
      </MDBCol>
    </MDBRow>

  


    <MDBBtn className='mb-2' onClick={handleClick} block style={{marginTop:"20px"}}>
      Update
    </MDBBtn>
  
    </div>
  );
}













export default EditCourse;


