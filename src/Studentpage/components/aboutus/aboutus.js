
import aboutimg from "../../stimages/about-us.png"
import CountUp from 'react-countup';
import { Container,Row,Col } from 'reactstrap'

import React from 'react'
import "../../student.css"

const Aboutus = () => {
  return (
    <section>
        <Container style={{marginTop:"60px"}}>
            <Row>
                <Col lg="5" md="4">
                    <div className='about__img'>
                        <img src={aboutimg} className="w-100" />
                    </div>
                </Col>


                <Col lg="5" md="6">
                    <div className="about__content">
                        <h2>About us</h2>
                        <p>Education is both the act of teaching 
                            knowledge to others and the act of receiving
                             knowledge from someone else. Education also refers 
                             to the knowledge received through schooling or instruction and to
                              the institution of teaching as a whole</p>

                              <div className="about__counter">
                                <div className="d-flex gap-5 align-items-center">
                                    <div className="single_counter">
                                        <span className="counter">
                                            <CountUp start={0} end={25} duration={12} suffix="K" />
                                        </span>

                                        <p className="counter_title">Completed Projects

                                        </p>
                                    </div>


                                    <div className="single_counter">
                                        <span className="counter">
                                            <CountUp start={0} end={12} duration={9} suffix="M" />
                                        </span>

                                        <p className="counter_title">Patient Around World

                                        </p>
                                    </div>


                                   
                              </div>



                              <div className="d-flex gap-5 align-items-center">
                                    <div className="single_counter">
                                        <span className="counter">
                                            <CountUp start={0} end={25} duration={10} suffix="K" />
                                        </span>

                                        <p className="counter_title">Completed Projects

                                        </p>
                                    </div>


                                    <div className="single_counter">
                                        <span className="counter">
                                            <CountUp start={0} end={12} duration={12} suffix="M" />
                                        </span>

                                        <p className="counter_title">Patient Around World

                                        </p>
                                    </div>


                              
                              </div>
                              </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Aboutus