import React, { useState } from 'react';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import { Col, Container, Image, Row, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images statically
import blinds1 from '../assets/img/blinds5.jpeg';
import blinds2 from '../assets/img/blinds6.jpeg';
import blinds3 from '../assets/img/blinds3.jpeg';
import blinds4 from '../assets/img/blinds7.jpeg';
import blinds5 from '../assets/img/blinds1.jpeg';
import blinds6 from '../assets/img/blinds4.jpeg';
import blinds7 from '../assets/img/blinds8.jpeg';
import blinds8 from '../assets/img/blinds9.jpeg';
import blinds9 from '../assets/img/blinds10.jpeg';

export default function BlindsImage() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [
    { src: blinds1, name: 'Blinds' },
    { src: blinds2, name: 'Blinds' },
    { src: blinds3, name: 'Balcony Blinds' },
    { src: blinds4, name: 'Blinds' },
    { src: blinds5, name: 'Roller Blinds' },
    { src: blinds6, name: 'Balcony Blinds' },
    { src: blinds7, name: 'Photo Frame Blinds' },
    { src: blinds8, name: 'Screen Blinds' },
    { src: blinds9, name: 'Screen Blinds' },
  ];

  return (
    <>
      <HeaderTwo />
      <section className='blinds_section'>
        <Container className='py-lg-5 py-3'>
          <h2 className='text-center mb-lg-5 mb-3'>Blinds Gallery</h2>
          <Row>
            {images.map((image, index) => (
              <Col lg={4} md={6} className='mb-4' key={index}>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>{image.name}</Tooltip>}
                >
                  <Image 
                    src={image.src} 
                    onClick={() => handleShow(image.src)}   
                    style={{ cursor: 'pointer' }}
                  />
                </OverlayTrigger>
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
