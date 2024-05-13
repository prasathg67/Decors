import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function CountUpPage() {
  const [countOn,setCountOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
      <section className='count-up' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="500">
        <Container className='py-md-5 py-3'>
          <Row className='text-center'>
            <Col md={3} className='m-md-0 mb-3'>
              <h1>
              {countOn && <CountUp start={0} end={10000} duration={2} delay={0}/>}
              +
              </h1>
              <p className='m-0'>Happy Customers</p>
            </Col>
            <Col md={3} className='m-md-0 mb-3'><h1>
              {countOn && <CountUp start={0} end={50} duration={2} delay={0}/>}
              +
              </h1>
              <p className='m-0'>Skilled Employees</p>
            </Col>
            <Col md={3} className='m-md-0 mb-3'>
              <h1>
              {countOn && <CountUp start={0} end={10000} duration={2} delay={0}/>}
              +
              </h1>
              <p className='m-0'>Project Completed</p>
            </Col>
            <Col md={3}>
              <h1>
              {countOn && <CountUp start={0} end={350} duration={2} delay={0}/>}
              +
              </h1>
              <p className='m-0'>Awards</p>
            </Col>
          </Row>
        </Container>
      </section>      
    </ScrollTrigger>
    
  )
}
