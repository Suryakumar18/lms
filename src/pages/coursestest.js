import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SideMenu from '../components/SideMenu';
import AppHeader from '../components/AppHeader';
import img1 from "../Studentpage/stimages/about-us.png"
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
import TextEditor from '../components/texteditor';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState,convertToRaw } from 'draft-js';
import { Breadcrumb, Space } from 'antd';
import draftToHtml from "draftjs-to-html";
import TextEditor2 from '../../src/pages/addcourses/texteditor2'

import  Breadcrumbsall from "../components/breadcum/Breadcum"



const ViewAllCourses = () => {



  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Coursename',
      headerName: 'Coursename',
      width: 100,
      editable: true,
      headerAlign: 'center',
      align: 'center',
      
    },
    {
      field: 'image',
      headerName: 'images',
      width: 100,
      editable: true,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <img style={{borderRadius:"50%",height:"50px",width:"70px"}} src={params.value} />
    },
    {
      field: 'hours',
      headerName: 'Hours',
      type: 'number',
      width: 100,
      editable: true,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'action',
      headerName: 'action',
      width: 280,
      headerAlign: 'center',
      align: 'center',
      
     renderCell:(params)=>{
      return(
        <>
        <div>
          <button className='btn btn-info'>Edit</button>
          <button style={{marginLeft:"5px"}} className='btn btn-danger' >Delete</button>
          <NavLink style={{marginLeft:"5px"}} className='btn btn-secondary'to="/showmodules" >AddModules</NavLink >
          
          
          </div>
        </>
      )
     }
    },
  ];

  const rows = [
    { id: 1, image: img1, Coursename: 'FullStack', hours: 35 },
    { id: 2, image:  img1, Coursename: 'FrontEnd', hours: 42 },
    { id: 3, image:  img1, Coursename: 'Backend', hours: 45 },
    { id: 4, image:  img1, Coursename: 'Python', hours: 16 },
    { id: 5, image:  img1, Coursename: 'Java', hours: 12 },
    { id: 6, image:  img1, Coursename: null, hours: 150 },
    { id: 7, image:  img1, Coursename: 'Ferrara', hours: 44 },
    { id: 8, image:  img1, Coursename: 'Rossini', hours: 36 },
    { id: 9, image:  img1, Coursename: 'Harvey', hours: 65 },
  ];

  const [data, setData] = useState(rows);


  return (

    <div>
      <AppHeader />
      <Breadcrumbsall />
      
      <div style={{display:"flex"}}>
      <div>
        <SideMenu />
      </div>
      
    <Box sx={{ height: 400, width: '60%' ,marginLeft:"200px",marginTop:"100px"}}>
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <TransitionsModal/>
    </div>
    </div>
  );
}










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
  return (
    <form>
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput id='form6Example1' type='tel' label='Id' />
      </MDBCol>
      <MDBCol>
        <MDBInput id='form6Example2' label='CourseName' />
      </MDBCol>
    </MDBRow>

    <MDBFile label='Course Image' id='customFile' />
    <MDBInput wrapperClass='mb-4' type='tel' id='Duration' label='Total hours' style={{marginTop:"30px"}} />

<div style={{}}>
    <TextEditor2 />
 </div>


    <MDBBtn className='mb-4' type='submit' block style={{marginTop:"20px"}}>
      Add
    </MDBBtn>
  </form>
   
  );
}













export default ViewAllCourses;



// import data from "../../userdata.json"
// import "bootstrap/dist/css/bootstrap.min.css"

// function Courses(){

//     return(
//         <div className="d-flex">
//             <h1>kcskkskm</h1>
//               {
//                 data.map((data,i)=>{
//                     <div className="border m-2" key={i}>
//                             <h1>{data.id}</h1>
//                             <h1>jmksk</h1>

//                     </div>

//                 })
//               }
//         </div>
//     )
// }
// export default Courses;














// <button style={{background:"#50C878",width:"90px",color:"white",border:"none",borderRadius:"10px"}}>
// {"View"}
// </button>

// <button style={{background:"#FF5733",width:"90px",color:"white",border:"none",borderRadius:"10px"}} onClick={()=> console.log(record)}>
// {"Delete"}
// </button>
{/* <NavLink to='/showmodules' style={{width:"90px",color:"black",border:"none",borderRadius:"10px",fontSize:"20px"}} onClick={()=> console.log(record)}>
Addmodule<i class="ri-file-add-line"></i>
</NavLink>  */}