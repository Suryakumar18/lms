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
import TextEditor2 from './texteditor2';

import axios from 'axios'
import { Link,useNavigate,useLocation } from "react-router-dom";
import {toast} from 'react-toastify'

const DataGridDemo= ()=>{
  return(
    <div>
    <AppHeader />
    <div style={{display:"flex"}}>
    <div>
      <SideMenu />
    </div>

      <ShowModules />
  
  </div>
  </div>
  )
}
const ShowModules = () => {



  const navigate = useNavigate()
  const location = useLocation()
  const courseid =   location.pathname.split('/')[2]
 

  const [courses,setCourses] = useState([]);
  const fetchAllbooks = async()=>{
    try{
        const res = await axios.get(`http://localhost:8800/getmodules/${courseid}`)
        setCourses(res.data);
    }catch(err){
      console.log(err)
    }
  }
  React.useEffect(()=>{


      fetchAllbooks()
  },[]);



  const handleDelete = async (moduleid)=>{
    try{
        await axios.delete("http://localhost:8800/deletemodule/"+moduleid);
        window.location.reload()
        toast.success("deleted successfully")
    }catch(err){
      console.log(err)
    }
  }
  return (

    <div>
    <div >
<div style={{marginLeft:"990px"}}>
  
<TransitionsModal/></div>

<div style={{width:"800px",marginLeft:"200px"}}>
<React.Fragment >
    <div className="container">
        <div className="row">
            <div className="col-md-12">
               <div className="d-grid d-md-flex justify-content-md-end mb-3">
               </div>
               <table className="table table-bordered table-striped">
                <thead>
                <tr>
               
                <th>CourseId</th>
                <th>moduleId</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
               
                </tr>
                </thead>
                <tbody>
                 {courses.map( (userData, index)=>(                           
                <tr key={index}>
                <td>{userData.courseid}</td>
                <td>{ userData.moduleid } </td>
                <td>{ userData.name } </td>
                <td>{ userData.desc } </td>
                <td>{ userData.cover&&<img style={{maxheight:"50px",width:"50px"}} src={userData.cover}/> } </td>
                
                <td>
                 {/* <Link to={"/editUser/"+userData.userid} className="btn btn-success mx-2">Edit</Link> */}
                 <div style={{display:"flex",gap:"4px"}}>
                 <button className='btn btn-danger' onClick={()=>handleDelete(userData.moduleid)}><i class="ri-delete-bin-2-fill"></i></button>
                 <button className='btn btn-success'><Link style={{textDecorationLine:"none",color:"white"}} to={`/moduleupdate/${userData.courseid}/${userData.moduleid}`}>Update</Link></button>
                 <button className='btn btn-success'><Link style={{textDecorationLine:"none",color:"white"}} to={`/addnewtopics/${userData.moduleid}`}>Add topics</Link></button>
                 </div>
                </td>
                </tr>
                )) 
                }                        
                </tbody>
                </table>                            
            </div>
        </div>
    </div>
    
</React.Fragment></div>
</div>
</div>
  );
}

export default DataGridDemo;









const style = {
  position:"absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{background:"blue",color:"white",marginTop:'50px',marginLeft:"-95px"}} className='btn btn-primary' onClick={handleOpen}><i class="ri-add-circle-line">addnew</i></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Fill the Details
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <AddModuleForms />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}










 function AddModuleForms() {
  
  const navigate = useNavigate()
  const location = useLocation()
  const courseid =   location.pathname.split('/')[2]
  const [courses,setCourses] = useState({
    courseid:courseid,
    moduleid:"",
    name:"",
    desc:"",
    cover:""
  })

  const handlechange =(e)=>{
    setCourses(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()

    try{
      await axios.post(`http://localhost:8800/insertmodules`,courses);
      toast.success("added successfully")
      window.location.reload()

    }catch(err){
      console.log(err)
    }

  }
  console.log(courses)
  return (
    <div>
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput onChange={handlechange} id='form6Example1' disabled value={courseid} type='text' label='courseid' name='courseid' />
      </MDBCol>
    </MDBRow>

    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput onChange={handlechange} id='form6Example1' type='text' label='moduleid' name='moduleid' />
      </MDBCol>
    </MDBRow>
    
      
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput onChange={handlechange} id='form6Example2' type='text' label='CourseName' name='name' />
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

    {/* <MDBFile label='Course Image' id='customFile' />
    <MDBInput wrapperClass='mb-4' type='tel' id='Duration' label='Total hours' style={{marginTop:"30px"}} />

<div style={{}}>
    <TextEditor2 />
 </div> */}


    <MDBBtn className='mb-2' onClick={handleClick} block style={{marginTop:"20px"}}>
      Add
    </MDBBtn>
  
    </div>
  );
}












