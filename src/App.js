
import './App.css';
import AppHeader from './components/AppHeader';
import SideMenu from  './components/SideMenu'

import AppFooter from './components/AppFooter'
import {Space} from "antd"
import  {ToastContainer} from 'react-toastify'
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom"
import FormDisabledDemo  from "../src/pages/addcourses/index";
import Courses from "../src/pages/courses/index";
import DashBoard from "../src/pages/Dashboard/index";
import StudentDeatils from "../src/pages/studentdetails/index";
import Testing from './Studentpage/header/index';
import Login from './components/login/login';
import Register from './components/login/register';
import Student from './Studentpage/header/index';
import Addcourses from '../src/pages/addcourses/index';
import Allcourses from './Studentpage/allcourses/allcourses';
import Assesment from './Studentpage/allcourses/Assesment';
import Topmirror from './Studentpage/codemirror/Codemirror';
import DataGridDemo from './pages/addcourses/showmoudles';
import Topics from './Studentpage/contents,assesmemts/Topics';
import { R } from 'react-html5video/dist';
import TopicShow from './Studentpage/contents,assesmemts/toicsshow';
import StudentSidemenu from './Studentpage/components/Studentsidemnu/StudentSidemenu';
import VideoComp from './Studentpage/contents,assesmemts/VideoComp';
import Practicecomp from './Studentpage/contents,assesmemts/practicecomp';
import { Content } from 'antd/es/layout/layout';
import ContentandAll from './pages/addcourses/ContentquesAdd';
import { Line } from 'react-chartjs-2';
import { Breadcrumbs } from '@mui/material';
import CourseModule from './Studentpage/allcourses/Assesment';
import EditCourse from './pages/courses/EditCourse';
import EditModule from './pages/addcourses/Editmodule';

import 'react-toastify/dist/ReactToastify.css';
import Addnewtopics from './pages/addcourses/addtopics';
import Edittopics from './pages/addcourses/Edittopics';
import Coursetopics from './Studentpage/contents,assesmemts/coursetopics';



function App() {

  return (
   <>
  <ToastContainer position='top-center' />
    <Routes>
    <Route path="/dashboard" element={<DashBoard />}></Route>

    <Route path="/Courses" element={<Courses />}></Route>

    <Route path="/addcourses" element={< FormDisabledDemo  />}></Route>

    <Route path="/studentdetails" element={< StudentDeatils />}></Route>

    <Route path='/page1' element={<Testing />}></Route>

    <Route path="/addcourse" element={< Addcourses  />}></Route>

    <Route path="/" element={< Login  />}></Route>

    <Route path="/register" element={< Register  />}></Route>

    <Route path="/page1" element={<Student />}></Route>

    <Route path='/courseupdate/:id' element={<EditCourse />}></Route>

    




    <Route path='/codemirror' element={<Topmirror />}></Route>
    

    <Route path='/showmodule/:courseid' element={<DataGridDemo />}></Route>
    <Route path='/moduleupdate/:id/:moduleid' element={<EditModule />}></Route>


    <Route path='/addnewtopics/:moduleid' element={<Addnewtopics />}></Route>
    <Route path='/updatetopics/:moduleid/:topicid' element={<Edittopics />}></Route>



    <Route path='/coursevideos' element={<VideoComp/>}></Route>

    <Route path='/practicecomp' element={<Practicecomp />}></Route>

    <Route path='/contentsadd' element={<ContentandAll />}></Route>




    <Route path='/allcourses' element={<Allcourses />} />
    
    <Route path='/coursemodule/:courseid' element={<CourseModule />} />
    <Route path='/coursetopic/:moduleid' element={<Coursetopics />}></Route>
    
    <Route path='/topics' element={<Topics />} />
    <Route path='/topicshow' element={<TopicShow/>} />


</Routes></>
  );
}

export default App;
