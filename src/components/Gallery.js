import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Gallery() {
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400" id='gallery'>

        <Container className='gallery_section py-lg-5 py-3'>
            <Row>
                <h2 className='text-center mb-lg-4 mb-3'>Our Galleries</h2>
            </Row>
            <Row>
                <Col md={8}>
                    <Row> 
                    <Col>
                        <div className='cardd'>
                        <div className='gallery-kitchen'><h1 className='gallery-heading p-5 text-light mb-auto'>KITCHEN</h1></div>
                        </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <div  className='cardd'>
                        <div className='gallery-bedroom'><h1 className='gallery-heading text-light mb-auto'>BEDROOM</h1></div>
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className='cardd'>
                        <div className='gallery-living'><h1 className='gallery-heading text-light mb-auto'>LIVING</h1></div>
                        </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className=''>
                    <div className='cardd'>
                <div className='gallery-dining'><h1 className='gallery-heading-dining text-light mb-0'>BLINDS</h1></div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
