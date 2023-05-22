
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


const Topicdata = [
  {
    id: "01",
    title: "Topic1",
    name:"tags",
    description:"WARNING in ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css)"
    
  },

  {
    id: "02",
    title: "Topic2",
    name:"selectors",
    description:"WARNING in ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css)"
    
  },
  {
    id: "03",
    title: "Topic3",
    name:"Dom elements",
    description:"WARNING in ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css)"
    
  },
  {
    id: "04",
    title: "Topic4",
    name:"tags",
    description:"WARNING in ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css)"
    
  },
  {
    id: "05",
    title: "Topic5",
    name:"tags",
    description:"WARNING in ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css)"
    
  },

];
  
  function Topics() {
    
    return (
        <div className='Topics-container' style={{width:"100%",height:"720px"}} >
        <TopicNav />
  
        {Topicdata.map((item) => (
            
              <TopicsDesign key={item.id} item={item} />
           
          ))}
      </div>
      
    )
  }
  
  export default Topics



  



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


















