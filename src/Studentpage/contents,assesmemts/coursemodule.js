

import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../student.css"
import courseImg1 from "../stimages/web-development.jpg"
import courseImg2 from "../stimages/web-development.jpg"
import courseImg3 from "../stimages/web-development.jpg"
import {NavLink} from "react-router-dom";
import courseimg4 from "../stimages/HTML-Blog-Cover-1.png"
import courseimg5 from "../stimages/css.webp"
import courseimg6 from "../stimages/js.png"
import Backbutton from "../components/backbutton/Backbutton";
import axios from "axios";
import {Link,useLocation,useNavigate} from "react-router-dom";
import { useState } from "react";






const CourseModules = () => {

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
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
          
                <h2>CourseModules</h2>
                <p>
             
                </p>
              </div>

              
             
            </div>
          </Col>
          {courses.map((item) => (
            <Col lg="4" md="6" sm="6">
               <div className="single__course__item">
      <div className="course__img">
        <img src={item.cover} alt="" style={{width:"300px"}} />
      </div>
      
      <div className="course__details">
        <h6 className="course__title mb-2">{item.title}</h6>
        <p>{item.desc}</p>

       

        <div className=" d-flex justify-content-between align-items-center">

          <p className="enroll d-flex align-items-center gap-1">
            <NavLink to="/assesment">View</NavLink>
            <button className='btn btn-primary'><Link style={{textDecorationLine:"none",color:"white"}} to={`/coursetopic/${item.moduleid}`}>view</Link></button>
          </p>
        </div>
      </div>
    </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};




// const CourseCard = (props) => {
//   const { imgUrl, modulename, Topics, students } = props.item;
  

//   return (
//     <div className="single__course__item">
//       <div className="course__img">
//         <img src={imgUrl} alt="" style={{width:"100px"}} />
//       </div>

//       <div className="course__details">
//         <h6 className="course__modulename mb-4">{modulename}</h6>

//         <div className=" d-flex justify-content-between align-items-center">
//           <p className="Topics d-flex align-items-center gap-1">
//             <i class="ri-book-open-line"></i> {Topics} Topics
//           </p>

//           <p className="students d-flex align-items-center gap-1">
//             <i class="ri-user-line"></i> {students}K
//           </p>
//         </div>

//         <div className=" d-flex justify-content-between align-items-center">
//           <p className="rating d-flex align-items-center gap-1">
            
//           </p>

//           <p className="enroll d-flex align-items-center gap-1">
//             <NavLink to="/topics">Start</NavLink>
//           </p>

         
//         </div>
//       </div>
//     </div>
//   );
// };

export default CourseModules