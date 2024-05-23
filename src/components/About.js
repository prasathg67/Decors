import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function About() {
  return (
    <div className="about">
      <div className="about_img  d-lg-block d-none">
        <Image src={require("../assets/img/about.jpg")} fluid />
      </div>
      <Container className="about_sec py-5">
        <Row>
          <Col lg={6} md={12} className="align-self-center">
            <Image
              src={require("../assets/img/latestinteriors.jpg")}
              id="image" className="rounded-3 "
              fluid
            />
          </Col>
          <Col lg={6} md={12}>
            <h2 className="">About <span>Shakthi Decors</span></h2>
            <p className="">
              We proudly introduce ourself that we are into interior decoration
              service and related service. Offering our service in and around
              Puducherry,South Arcot districts. Our main services include
              interior services viz, Curtains, Fiber mesh, PVC Balcony Blinds,
              PVC Cupboards, Door type netlon, Sofa Lining Work, interior
              designs. At Latest Interiors, we are not just an ordinary interior
              design company in Puducherry. 
            </p>
            <p>
              We believe that a well-designed
              interior has the power to transform lives, shaping environments
              that inspire, invigorate, and reflect the essence of those who
              inhabit them. For us, each project is a unique canvas, a symphony
              of aesthetics and functionality, meticulously curated to tell a
              compelling story of luxury and artistry. Being the best interior
              designers in Puducherry, we invite you to explore and embark on a
              that transcends conventional design.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
