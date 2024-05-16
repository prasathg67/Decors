import { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormSection() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="form_section py-lg-5 py-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
      <h2 className='text-center'>Transform Your Space With The Best Interior Designers</h2>
      <p className='text-center'> <b> Let's bring your vision to life!</b></p>
      <Container>
        <Row className='pt-5'>
          <Col lg={4} >
            <h3 className='py-3'>Schedule Your Appointment Now!</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="form">
              <Form.Group>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Phone" required />
              </Form.Group>
              <Form.Group>
                <Form.Control as="textarea" rows={5} placeholder="Leave Your Message" required />
              </Form.Group>
            <Button className='ht_btn' type="submit">Submit</Button>
            </Form>
          </Col>
          <Col lg={8} >
            <div className="common_div">
              <div className='form_imgs'>
                <div className='form_img1 mb-lg-0 mb-3' style={{width:"350px",height:"300px"}}>
                  <Image src={require("../assets/img/form_img1.jpg")} />
                </div>
                <div className='form_img2 mb-lg-0 mb-3' style={{width:"250px",height:"250px"}}  >
                  <Image src={require("../assets/img/form_img2.jpg")} />
                </div>
                <div className='form_img3 mb-lg-0 mb-3' style={{width:"280px",height:"250px"}} >
                  <Image src={require("../assets/img/form_img3.jpg")} />
                </div>
                <div className='form_img4' style={{width:"250px",height:"350px"}} >
                  <Image src={require("../assets/img/form_img4.jpg")} />
                </div>
              </div>
            </div>            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
