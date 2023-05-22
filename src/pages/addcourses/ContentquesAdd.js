import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import  { useState } from 'react';
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AppHeader from "../../components/AppHeader";
import SideMenu from "../../components/SideMenu";
import "../../App.css"
import { NavLink } from "react-router-dom";
import img1 from '../../Studentpage/stimages/html.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TextEditor from "../../components/texteditor";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

import TextField from '@mui/material/TextField';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,MDBFile
} from 'mdb-react-ui-kit';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState,convertToRaw } from 'draft-js';
import { Space } from 'antd';
import draftToHtml from "draftjs-to-html";
import TextEditor2 from "./texteditor2";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddQuestions from "./addquestions";



function ContentandAll(args) {
  

  

  return (


    
    <div>
<AppHeader/>


  <div style={{display:"flex"}}>

        <div>
        <SideMenu />
                
        </div>
     
        <div >
          <MbTabs1 />
      </div>
      </div>
      
    </div>
    
  );
}

export default ContentandAll;









 function MbTabs1() {
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Topic',
      headerName: 'Topic',
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
      field: 'Files',
      headerName: 'Files',
      type: 'file',
      width: 100,
      editable: true,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'Videos',
      headerName: 'Videos',
      type: 'file',
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
         
          </div>
        </>
      )
     }
    },
  ];

  const rows = [
    { id: 1, image: img1, Topic: 'Topic1', hours: 35 },
    { id: 2, image:  img1, Topic: 'Topic2', hours: 42 },
    { id: 3, image:  img1, Topic: 'Topic3', hours: 45 },
    { id: 4, image:  img1, Topic: 'Topic4', hours: 16 },
    { id: 5, image:  img1, Topic: 'Topic5', hours: 12 },
    { id: 6, image:  img1, Topic: 'Topic6', hours: 150 },
    { id: 7, image:  img1, Topic: 'Topic7', hours: 44 },
    { id: 8, image:  img1, Topic: 'Topic8', hours: 36 },
    { id: 9, image:  img1, Topic: 'Topic9', hours: 65 },
  ];

  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            CourseContent
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Practicequestions
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Assesments
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>








      <MDBTabsContent style={{width:"1300px"}}>


        <MDBTabsPane show={basicActive === 'tab1'}>
          
       
        <Box sx={{ height: 400, width: '75%' ,marginLeft:"120px",marginTop:"20px"}}>
        <Addconentpopup />
      
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
        </MDBTabsPane>





        <MDBTabsPane show={basicActive === 'tab2'}>


          <AddQuestions />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}


















function AddContentForms() {
  return (
    <form>
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput id='form6Example1' type='tel' label='Id' />
      </MDBCol>
      <MDBCol>
        <MDBInput id='form6Example2' label='topic name' />
      </MDBCol> 
    </MDBRow>
    
    <MDBFile label='Content image' id='customFile' />

    <MDBFile label='content files' id='customFile' />

    <MDBFile label='Videos' id='customFile' />
   

<div style={{}}>
    <TextEditor2 />
 </div>


    <MDBBtn className='mb-4' type='submit' block style={{marginTop:"20px"}}>
      Add
    </MDBBtn>
  </form>
   
  );
}














const style = {
  position:  'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Addconentpopup=()=>{

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{background:"blue",color:"white",marginTop:'50px',marginLeft:"876px"}} className='btn btn-primary' onClick={handleOpen}><i class="ri-add-circle-line">addnew</i></Button>
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <AddContentForms />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

