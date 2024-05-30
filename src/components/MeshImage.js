import React, { useState } from 'react';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import { Col, Container, Image, Row, Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
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

export default function MeshImage() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [
    { src: mesh1, name: 'Mosquito Mesh' },
    { src: mesh2, name: 'Mosquito Mesh' },
    { src: mesh3, name: 'Mosquito Mesh' },
    { src: mesh4, name: 'Mosquito Mesh' },
    { src: mesh5, name: 'Mosquito Mesh' },
    { src: mesh6, name: 'Mosquito Mesh' },
    { src: mesh7, name: 'Mosquito Mesh' },
    { src: mesh8, name: 'Mosquito Mesh' },
    { src: mesh9, name: 'Mosquito Mesh' },
  ];

  return (
    <>
      <HeaderTwo />
      <section className='mesh_section'>
        <Container className='py-lg-5 py-3'>
        <div className=" mt-4">
            <Button onClick={() => {navigate('/')}} className="ht_btn"><FaArrowLeft />Back to Home</Button>
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
