import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import "../../../src/App.css"
import { Link } from 'react-router-dom';
import DashBoard from '../../pages/Dashboard';

import { useNavigate } from 'react-router-dom';



const Login=()=>{

    const history = useNavigate();
    const [Input,setInput] = useState({email:'',password:''})
    const [errorMessage,seterrorMessage] = useState('')
    const [successMessage,setsuccessMessage] = useState('')

    const handleChange =(e)=>{
        setInput({...Input,[e.target.name]: e.target.value})
    }

    useEffect(()=>{
      if(localStorage.getItem('auth')) history('/')
    },[])
    const formSubmitter=(e)=>{
        e.preventDefault();
        setsuccessMessage('')
        var Email = Input.email
        var password = Input.password

       var admin = 'admin@gmail.com'
       var passwords ='123'


       var student = "student@gmail.com"
       var stpass="111"
      var ress = false
        console.log(Email)
        console.log(password)
      // setsuccessMessage("successfully done")

      if((Input.email === admin && Input.password ===passwords) || (Input.email === student && Input.password ===stpass)){
        if(Input.email===admin && Input.password===passwords){
          history('/dashboard')
          localStorage.setItem('auth',true)
        }
        if(Input.email===student && Input.password===stpass){
          history('/page1')
          localStorage.setItem('auth',true)
        }

   
      } 
      else{

        return seterrorMessage("invalid email or password")
      }


      
    }
    return(
        <div className='Login' style={{marginTop:"100px",width:"800px",marginLeft:"380px"}}>



        
      

        <MDBContainer className="p-5 my-5 d-flex flex-column w-50" >
    


      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name='email' onChange={handleChange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' onChange={handleChange}/>


      {errorMessage.length>0 && <div style={{marginBottom:"10px",color:"red"}}>{errorMessage}</div>}


      {successMessage.length>0 && <div style={{marginBottom:"10px",color:"green"}}>{successMessage}</div>}

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={formSubmitter}>Sign in</MDBBtn>

      <div className="text-center">
        <nav>
            <Link to="/register">Register</Link>
        </nav>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
    </div>
  );
    
}


export default Login;