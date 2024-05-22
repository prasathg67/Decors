import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faHandHoldingHand, faPeopleGroup, faPersonDigging, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function ProjectComplete() {
  return (
    <>
    <div className='inline-content'>
    
    <h2 className='hr-lines text-center'>Project Completion In <span className='span-text'> 40 Working Days</span></h2>
    
    </div>
    <Container className='project_section'>
        <Row>
            <Col className='text-center'><FontAwesomeIcon icon={faPeopleGroup} className='icons-size' /><p>Talk to our Interior Designer</p> </Col>
            <Col className='text-center'><FontAwesomeIcon icon={faPenToSquare} className='icons-size' /> <p>Detailed Drawing & Approval</p></Col>
            <Col className='text-center'><FontAwesomeIcon icon={faPersonDigging} className='icons-size' /> <p>Production at Own Factories</p></Col>
            <Col className='text-center'><FontAwesomeIcon icon={faTruck} className='icons-size' /> <p>Material Delivery & Execution</p></Col>
            <Col className='text-center'><FontAwesomeIcon icon={faHandHoldingHand} className='icons-size' /><p>On Time Project Hand Over</p></Col>
        </Row>
    </Container>
    </>
  )
}
