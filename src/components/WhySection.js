// src/InteriorDesign.js
import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import lightbulb from '../assets/img/lightbulb.png'
import meeting from '../assets/img/meeting.png'
import hand from '../assets/img/hand.png'

const WhySection = () => {
  return (
    <Container fluid className="p-4 why_section">
      <Row className="">
        <Col lg={7}>
          <div className="image-container">
            <Image
              src={require("../assets/img/reception.jpg")}
              className="reception"
            ></Image>
          </div>
        </Col>
        <Col lg={5} className="content">
          <div className="">
          <h2 className="">
            Why choose Shakthi decors
          </h2>
          <p className="">
            Latest Interiors adheres to a strategic three-step process that
            ensures exceptional results for our clients. Our approach begins
            with a comprehensive discussion to understand your vision, followed
            by the creative ideation phase, and culminates in the expert
            execution of your dream interior. This method guarantees a seamless,
            tailored, and truly transformative experience for every project by
            the best interior designers in Puducherry.
          </p>
          <Button className="ht_btn">
            Let's Create Your Dream Space
          </Button>
          </div>
          <div className="boxpoint">
            <ul className="box">
              <li className="boxlist">
                <div className="boxsec"></div>
              </li>
            </ul>
            <div className="step">
              <h2>Step 01</h2>
              <img src={lightbulb} alt="light" className="light-bulb" />
              <p className="ideas text-center">Creating Ideas</p>
              <span>Generating Ideas</span>
            </div>
            <div className="step">
              <h2>Step 02</h2>
              <img src={meeting} alt="meet" className="light-bulb" />
              <p className="discussion text-center">Discussion</p>
              <span>Initiate with Discussion</span>
            </div>
            <div className="step">
              <h2>Step 03</h2>
              <img src={hand} alt="light" className="light-bulb" />
              <p className="plans text-center">Plans</p>
              <span>Bringing Plans to Life</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhySection;
