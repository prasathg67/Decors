import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormSection() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  const [values,setValues] = useState({
    name :"",
    email:"",
    phone:"",
    query:""
  })
  const [errors,setErrors] = useState({})
  function handleInput(event){
    const newObj = {...values, [event.target.name]: event.target.value}
    setValues(newObj);
  }
  function handlevalidation(event){
    event.preventDefault();
    setErrors(FormValidation(values));

  }

  return (
    <>
      <section className="form_section">
        <Container >
          <Row>
            <Col lg={5}>              
              <Form onSubmit={handlevalidation}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    onChange={handleInput}
                  />
                  {errors.name && <p>{errors.name}</p>}
                  {/* <Form.Control.Feedback type="invalid">
                    Please provide a Your Name.
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Phone"
                    onChange={handleInput}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    Please provide a valid Phone Number.
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" onChange={handleInput} required/>
                  {/* <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Query</Form.Label>
                  <Form.Control type="text" placeholder="State" onChange={handleInput} required />
                  {/* <Form.Control.Feedback type="invalid">
                    Please provide your Query.
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </Col>
            <Col lg={7}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
