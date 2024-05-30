import React, { useState } from 'react';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import { Col, Container, Image, Row, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images statically
import slider1 from '../assets/img/kitchen1.jpeg';
import slider2 from '../assets/img/kitchen2.jpeg';
import slider3 from '../assets/img/kitchen6.jpeg';
import slider4 from '../assets/img/kitchen4.jpeg';
import slider5 from '../assets/img/kitchen5.jpeg';
import slider6 from '../assets/img/kitchen3.jpeg';

export default function KitchenImage() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
  ];

  return (
    <>
      <HeaderTwo />
      <section className='kitchen_section'>
        <Container className='py-lg-5 py-3'>
          <h2 className='text-center mb-lg-5 mb-3'>Kitchen PVC Cupboards</h2>
          <Row>
            {images.map((image, index) => (
              <Col lg={4} md={6} className='mb-4' key={index}>
                <Image 
                  src={image} 
                  onClick={() => handleShow(image)}   
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          {selectedImage && <Image src={selectedImage} fluid />}
        </Modal.Body>
      </Modal>

      <Contact />
    </>
  );
}
