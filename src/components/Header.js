import { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';
import { IoCall } from "react-icons/io5";


export default function Header({variant}) {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
  return (
    <>
    {/* Header Address */}
    <section className='header_address'>
      <Container className='py-3'>
        <Row>
          <Col sm={9} className='d-sm-block d-none'>
            <div>
              <ul className='hide_mobile d-flex'>
                <li className='me-3 d-lg-block d-none'><IoMdMail className='ad_icon' /><a href="mailto:shakthidecor82@gmail.com" target='_blank' > shakthidecor82@gmail.com</a></li>
                <li className='me-3 d-lg-block d-none'><IoCall className='ad_icon' /><a href="tel:04134900281">(0413)-4900 281</a></li>
                <li className='me-3'><IoLogoWhatsapp className='ad_icon text-success' /><a href="tel:9944808181">+91 994480 8181</a></li>
              </ul>
            </div>
          </Col>
          <Col sm={3} className='d-sm-block d-none'>
            <ul className='icons d-flex'>
              <li className='me-3'><a href="https://www.facebook.com/shakthi.decor.9?mibextid=ZbWKwL"><FaFacebookF className='ad_icon text-primary' /></a></li>
              <li className='me-3'><a href=""><FaXTwitter className='ad_icon' /></a></li>
            </ul>
          </Col>
          <Col className='d-sm-none d-block'>
            <div className='d-flex justify-content-around'>
              <ul>
                <li className=''><IoLogoWhatsapp className='ad_icon' /><a href="tel:9944808181">+91 994480 8181</a></li>
              </ul>
              <ul className='d-flex'>
                <li className='me-3'><a href="https://www.facebook.com/shakthi.decor.9?mibextid=ZbWKwL"><FaFacebookF className='ad_icon text-primary' /></a></li>
                <li className='me-3'><a href=""><FaXTwitter className='ad_icon' /></a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Navabr section */}
      
      <div className={`header__sticky ${ variant ? variant : "" } ${isSticky ? "header__sticky-sticky-menu" : ""}`}>

      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar py-3">
            <Container fluid>
            <Navbar.Brand href="#"><Image
                src={require("../assets/img/sd_logo.jpg")}
                className="logo"
              ></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Image
                    src={require("../assets/img/sd_logo.png")}
                    className="logo"
                ></Image>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
                    <Nav.Link href="#action2" className='text-white'>About</Nav.Link>
                    <Nav.Link href="#action3" className='text-white'>Services</Nav.Link>
                    <Nav.Link href="#action4" className='text-white'>Gallery</Nav.Link>
                    <Nav.Link href="#action5" className='text-white'>Contact</Nav.Link>
                    <Nav.Link href="tel:9944808181" className='call-btn'><IoCall /> Call Now</Nav.Link>
                </Nav>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
      ))}
      </div>
    </>
  );
}

