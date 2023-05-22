import React from 'react'
import axios from 'axios'
import { Link,useNavigate,useLocation } from "react-router-dom";
import {toast} from 'react-toastify'
import { useState } from 'react';
import AppHeader from '../../components/AppHeader';
import SideMenu from '../../components/SideMenu';
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
import Box from '@mui/material/Box';

import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import { Document ,Page} from 'react-pdf/dist/esm/entry.webpack'

















const   Addnewtopics=()=> {

    const location = useLocation()
    const moduleid =   location.pathname.split('/')[2] 
    console.log(moduleid)
    const [topics,settopics] = useState([]);
    const fetchAllbooks = async()=>{
      try{
          const res = await axios.get(`http://localhost:8800/addnewtopics/${moduleid}`)
          settopics(res.data);
      }catch(err){
        console.log(err)
      }
    }
    React.useEffect(()=>{
  
  
        fetchAllbooks()
    },[]);






    const handleDelete = async (topicid)=>{
        try{
            await axios.delete("http://localhost:8800/deletetopics/"+topicid);
            window.location.reload()
            toast.success("deleted successfully")
        }catch(err){
          console.log(err)
        }
      }










  return (

   <div>
    <AppHeader />

    <div style={{display:"flex"}}>
        <SideMenu />
    <div >
<div style={{marginLeft:"990px"}}>
</div>

<div style={{width:"800px",marginLeft:"200px"}}>
    <div style={{marginLeft:"780px"}}>
    <TransitionsModal />
    </div>
<React.Fragment >
    <div className="container">
        <div className="row">
            <div className="col-md-12">
               <div className="d-grid d-md-flex justify-content-md-end mb-3">
               </div>
               <table className="table table-bordered table-striped">
                <thead>
                <tr>
               
                <th>moduleid</th>
                <th>topicid</th>
                <th>topicname</th>
                <th>desc</th>
                <th>video</th>
                <th>pdf</th>
               
                </tr>
                </thead>
                <tbody>
                {topics.map( (userData, index)=>(                           
                <tr key={index}>
                
                
                <td>{ userData.moduleid } </td>
                <td>{ userData.topicid } </td>
                <td>{ userData.topicname } </td>
                <td>{ userData.desc } </td>
                <td>     
                     <Video autoPlay loop >
                            <source src={userData.video} type='video/mp4'></source>

                    </Video>
                 </td>


                <td>			<Document
				file={userData.pdf}
				
			>
				<Page />
			</Document> </td>


                    
            <td>
                 <div style={{display:"flex",gap:"4px"}}>
                 {/* <button className='btn btn-danger' onClick={()=>handleDelete(userData.moduleid)}><i class="ri-delete-bin-2-fill"></i></button> */}
                 <button className='btn btn-success'><Link style={{textDecorationLine:"none",color:"white"}} to={`/updatetopics/${userData.moduleid}/${userData.topicid}`}>Update</Link></button>
                 <button className='btn btn-danger' onClick={()=>handleDelete(userData.topicid)}><i class="ri-delete-bin-2-fill"></i></button>
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

</div>


  )
}

export default Addnewtopics;








































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
    const moduleid =   location.pathname.split('/')[2]
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
  
    const handleClick = async e =>{
      e.preventDefault()
  
      try{
        await axios.post(`http://localhost:8800/addtopic`,courses);
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
          <MDBInput onChange={handlechange} id='form6Example2' type='text' label='topicName' name='topicname' />
        </MDBCol>
      </MDBRow>
  
        <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput onChange={handlechange} id='form6Example2' type='text' label='topicDesc' name='desc' />
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
        Add
      </MDBBtn>
    
      </div>
    );
  }
  
  
  
  