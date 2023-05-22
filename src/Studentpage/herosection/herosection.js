import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import heroImg from "../stimages/hero-img1.png"
import "../student.css"
import home from "../stimages/home2.jpg"

const Herosection = () => {
  return (
    <section>
        <Container style={{marginTop:"20px"}}>
            <Row>
                <Col lg='6' md='6' >
                    <div className='hero__content'>
                    <h2 className='mb-4'>Anytime Anywhere<br/> Learn on Your <br /> Suitable Schedule</h2>
                    <p className='mb-4'> 
                    Install reactstrap and peer dependencies via NPM npm install<br /> --save reactstrap react react-dom.
                     Import<br /> the components you need. Danger!
                    
                         </p>

                    <div className='search'>
                        <input type='text' placeholder='search'/>
                        <button className='btn'>Search</button>
                    </div>
                    </div>
                 
                </Col>

                <Col lg='6' md='6'>
                    <img src={home} className='w-100' />
                
                </Col>
            </Row>
        </Container>
       
    </section>
    
  )
}











export default Herosection