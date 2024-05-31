import React, { useState } from 'react';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import { Col, Container, Image, Row, Modal, OverlayTrigger, Tooltip, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images statically
import mesh1 from '../assets/img/mesh1.jpeg';
import mesh2 from '../assets/img/mesh2.jpeg';
import mesh3 from '../assets/img/mesh3.jpeg';
import mesh4 from '../assets/img/mesh4.jpeg';
import mesh5 from '../assets/img/mesh5.jpeg';
import mesh6 from '../assets/img/mesh6.jpeg';
import mesh7 from '../assets/img/mesh7.jpeg';
import mesh8 from '../assets/img/mesh8.jpeg';
import mesh9 from '../assets/img/mesh9.jpeg';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

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
    { src: mesh1, name: 'Door Mesh' },
    { src: mesh2, name: 'Window Mesh' },
    { src: mesh3, name: 'Door Mesh' },
    { src: mesh4, name: 'Door Shutter Mesh' },
    { src: mesh5, name: 'Window Mesh' },
    { src: mesh6, name: 'Door Mesh' },
    { src: mesh7, name: 'Door Mesh' },
    { src: mesh8, name: 'Door Mesh' },
    { src: mesh9, name: 'Door Mesh' },
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
      <section className='mesh_section'>
        <Container className='py-lg-5 py-3'>
          <div className=" mt-4">
            <Button onClick={() => {navigate('/')}} className="ht_btn"><FaArrowLeft /> Back to Home</Button>
          </div>
          <h2 className='text-center mb-lg-5 mb-3'>Mesh Gallery</h2>
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
