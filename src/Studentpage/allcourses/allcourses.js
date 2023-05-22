import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../student.css"

import {NavLink, useLocation,Link} from "react-router-dom";
import courseimg4 from "../stimages/HTML-Blog-Cover-1.png"
import courseimg5 from "../stimages/css.webp"
import courseimg6 from "../stimages/js.png"
import Coursesnav from "../components/coursesnavbar/nav";
import backimg from "../stimages/light.jpg"
import "../student.css"
import Breadcrumbsall from "../../components/breadcum/Breadcum";
import { useState } from "react";
import axios from "axios";




const Allcourses = () => {
 
  const [courses,setCourses] = useState([]);

  React.useEffect(()=>{
      const fetchAllbooks = async()=>{
        try{
            const res = await axios.get("http://localhost:8800/books")
            console.log(res)
            setCourses(res.data);
        }catch(err){
          console.log(err)
        }
      }

      fetchAllbooks()
  },[])
  return (
    <section style={{background:backimg}}>
      <Coursesnav />
      {/* <Breadcrumbsall /> */}
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Start Your Favorite Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              
             
            </div>
          </Col>
      <div style={{display:"flex",flexDirection:"row"}}>
          {courses.map((item) => (
           <div className="single__course__item">
      <div className="course__img">
        <img src={item.cover} alt="" style={{width:"300px"}} />
      </div>
      
      <div className="course__details">
        <h6 className="course__title mb-2">{item.title}</h6>

       

        <div className=" d-flex justify-content-between align-items-center">

          <p className="enroll d-flex align-items-center gap-1">
            <NavLink to="/assesment">View</NavLink>
            <button className='btn btn-primary'><Link style={{textDecorationLine:"none",color:"white"}} to={`/coursemodule/${item.courseid}`}>view</Link></button>
          </p>
        </div>
      </div>
    </div>
          ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};




const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, ating } = props.item;
  

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {ating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <NavLink to="/assesment">View</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Allcourses