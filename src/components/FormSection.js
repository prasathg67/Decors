import axios from "axios";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormSection() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Custom validation
    if (username.length === 0) {
      alert("Please enter your name.");
      event.preventDefault();
      return;
    } else if (username.length < 3) {
      alert("Name must be at least 3 letters long.");
      event.preventDefault();
      return;
    } else if (email.length === 0) {
      alert("Please enter your email.");
      event.preventDefault();
      return;
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    } else if (phone.length === 0) {
      alert("Please enter your phone number.");
      event.preventDefault();
      return;
    } else if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      event.preventDefault();
      return;
    } else if (message.length === 0) {
      alert("Please leave your enquiry.");
      event.preventDefault();
      return;
    }

    // Submit form if all validations pass
    const url = "http://localhost/shakthi_decord/insert.php";
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    axios
      .post(url, formData)
      .then((response) => {
        alert("Your enquiry has been submitted successfully.");
      })
      .catch((error) => console.log(error));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section
      className="form_section py-lg-5 py-3"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      id="book"
    >
      <h2 className="text-center">
        Transform Your Space With The Best Interior Designers
      </h2>
      <p className="text-center">
        {" "}
        <b> Let's bring your vision to life!</b>
      </p>
      <Container>
        <Row className="pt-lg-5 pt-2">
          <Col lg={4}>
            <h3 className="py-3">Enquire Now!</h3>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="form"
            >
              <Form.Group>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9]{10}"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid 10-digit phone number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Leave Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please leave your enquiry.
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="ht_btn" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={8}>
            <div className="common_div">
              <div className="form_imgs">
                <div
                  className="form_img1 mb-lg-0 mb-3"
                  style={{ width: "350px", height: "300px" }}
                >
                  <Image src={require("../assets/img/form_img1.jpg")} />
                </div>
                <div
                  className="form_img2 mb-lg-0 mb-3"
                  style={{ width: "250px", height: "250px" }}
                >
                  <Image src={require("../assets/img/form_img2.jpg")} />
                </div>
                <div
                  className="form_img3 mb-lg-0 mb-3"
                  style={{ width: "280px", height: "250px" }}
                >
                  <Image src={require("../assets/img/form_img3.jpg")} />
                </div>
                <div
                  className="form_img4"
                  style={{ width: "250px", height: "350px" }}
                >
                  <Image src={require("../assets/img/form_img5.jpg")} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
