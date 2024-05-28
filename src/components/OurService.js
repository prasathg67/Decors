import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { SiTicktick } from 'react-icons/si'

export default function OurService() {
  return (
    <div>
      <section className="our_service py-lg-5 py-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
        <h2 className='text-center mb-lg-5 mb-3'  id='service'>What We Do</h2>
        <Container>
            <Row>
                <Col lg={6}>
                    <Image src={require('../assets/img/service.jpg')} className='rounded-3'/>
                </Col>
                <Col lg={6} className='mt-3'>
                    <h3>IN THE FOLLOWING SEGMENTS</h3>
                    <p>Rendering our service with high quality products</p>
                    <ul>
                        <li><SiTicktick /> Curtains</li>
                        <li><SiTicktick /> Mosquito Mesh</li>
                        <li><SiTicktick /> PVC Blinds</li>
                        <li><SiTicktick /> Sofa Lining Works</li>
                        <li><SiTicktick /> Vinyl Flooring</li>
                        <li><SiTicktick /> Shutter Type Netion</li>
                    </ul>
                    <Button className='ht_btn mt-lg-4 mt-3'>Book Now!</Button>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}
