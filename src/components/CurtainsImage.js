import React, { useState } from 'react';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import { Col, Container, Image, Row, Modal, OverlayTrigger, Tooltip, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images statically
import curtains1 from '../assets/img/curtains1.jpeg';
import curtains2 from '../assets/img/curtains3.jpeg';
import curtains3 from '../assets/img/curtains4.jpeg';
import curtains4 from '../assets/img/curtains2.jpeg';
import curtains5 from '../assets/img/curtains5.jpeg';
import curtains6 from '../assets/img/curtains6.jpeg';
import curtains7 from '../assets/img/curtains8.jpeg';
import curtains8 from '../assets/img/curtains7.jpeg';
import curtains9 from '../assets/img/curtains9.jpeg';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

export default function BlindsImage() {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [
    { src: curtains1, name: 'Curtains' },
    { src: curtains2, name: 'Curtains' },
    { src: curtains3, name: 'Curtains' },
    { src: curtains4, name: 'Curtains' },
    { src: curtains5, name: 'Curtains' },
    { src: curtains6, name: 'Curtains' },
    { src: curtains7, name: 'Curtains' },
    { src: curtains8, name: 'Curtains' },
    { src: curtains9, name: 'Curtains' },
  ];

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <HeaderTwo />
      <section className='curtains_section'>
        <Container className='py-lg-5 py-3'>
          <div className=" mt-4">
            <Button onClick={() => {navigate('/')}} className="ht_btn"><FaArrowLeft /> Back to Home</Button>
          </div>
          <h2 className='text-center mb-lg-5 mb-3'>Curtains Gallery</h2>
          <Row>
            {images.map((image, index) => (
              <Col lg={4} md={6} className='mb-4' key={index}>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>{image.name}</Tooltip>}
                >
                  <Image 
                    src={image.src} 
                    onClick={() => handleShow(index)}   
                    style={{ cursor: 'pointer' }}
                  />
                </OverlayTrigger>
              </Col>
            ))}
          </Row>          
        </Container>
      </section>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="light" onClick={handlePrev}>
              <FaArrowLeft />
            </Button>
            <Carousel activeIndex={selectedIndex} onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)} indicators={false} controls={false}>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image src={image.src} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
            <Button variant="light" onClick={handleNext}>
              <FaArrowRight />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Contact />
    </>
  );
}
