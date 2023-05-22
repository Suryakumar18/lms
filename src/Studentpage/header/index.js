import React ,{Fragment} from "react"
import StudentNav from "../studentnavbar"
import Herosection from "../herosection/herosection"
import Companyies from "../components/companies/company"
import Aboutus from "../components/aboutus/aboutus"
import Courses from "../components/SomeCourses/somecourses"
import Chooseus from "../components/chooseus/chooseus"
import Features from "../components/features/features"
import Testimonials from "../components/testmonial/testmonial"
import Footerss from "../components/footer/footer"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
const Home =()=>{
  

    return<Fragment>
        <StudentNav />
        <Herosection />
        <Companyies />
        <Aboutus />
        <Courses />
        <Chooseus />
        <Features />
      <Footerss />
        
    </Fragment>
}

export default Home;