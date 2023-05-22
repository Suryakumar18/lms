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
import QuestionTextEditor from './QuestionTexeteditor';



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Questions',
      headerName: 'Questions',
      width: 200,
      editable: true,
      headerAlign: 'center',
      align: 'center',
      
    },
    {
      field: 'action',
      headerName: 'action',
      width: 180,
      headerAlign: 'center',
      align: 'center',
      
     renderCell:(params)=>{
      return(
        <>
        <div>
          <button className='btn btn-info'>Edit</button>
          <button style={{marginLeft:"5px"}} className='btn btn-danger' >Delete</button>
          </div>
        </>
      )
     }
    },
  ];

  const rows = [
    { id:1, Questions: 'What is HTML?' },
    { id:2, Questions: 'What are HTML tags? ' },
    { id:3,  Questions: 'What are HTML Attributes?'},
    { id:4, Questions: 'What is a marquee in HTML?' },
    { id:5, Questions: 'How do you separate a section of texts in HTML?' },
    { id:6, Questions: 'Define the list types in HTML?' },
    { id:7, Questions: 'How do you align list elements in an HTML file?' },
    { id:8, Questions: 'Rossini' },
    { id:9, Questions: 'Harvey' },
  ];

 

  const AddQuestions=()=>{
    const [data, setData] = useState(rows);
    return(
        <div>

<Box sx={{ height: 400, width: '60%' ,marginLeft:"200px",marginTop:"30px"}}>
    <AddQuestionpopup />
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
        </div>
    )
  }

  export default AddQuestions;
















  const style = {
    position:"absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1050,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const AddQuestionpopup=()=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button style={{background:"blue",color:"white",marginTop:'50px',marginLeft:"684px"}} className='btn btn-primary' onClick={handleOpen}><i class="ri-add-circle-line">addnew</i></Button>
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
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <QuestionTextEditor/>
                <MDBBtn className='mb-4' type='submit' block style={{marginTop:"20px"}}> Add</MDBBtn>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
















