import React, { useState } from 'react';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import { Col, Container, Image, Row, Modal, OverlayTrigger, Tooltip, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images statically
import slider1 from '../assets/img/kitchen1.jpeg';
import slider2 from '../assets/img/kitchen2.jpeg';
import slider3 from '../assets/img/kitchen6.jpeg';
import slider4 from '../assets/img/kitchen4.jpeg';
import slider5 from '../assets/img/kitchen5.jpeg';
import slider6 from '../assets/img/kitchen3.jpeg';
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
    { src: slider1, name: 'Kitchen PVC Cupboards' },
    { src: slider2, name: 'Kitchen PVC Cupboards' },
    { src: slider3, name: 'Kitchen PVC Cupboards' },
    { src: slider4, name: 'Kitchen PVC Cupboards' },
    { src: slider5, name: 'Kitchen PVC Cupboards' },
    { src: slider6, name: 'Kitchen PVC Cupboards' },

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
      <section className='blinds_section'>
        <Container className='py-lg-5 py-3'>
          <div className=" mt-4">
            <Button onClick={() => {navigate('/')}} className="ht_btn"><FaArrowLeft /> Back to Home</Button>
          </div>
          <h2 className='text-center mb-lg-5 mb-3'>Kitchen Gallery</h2>
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
