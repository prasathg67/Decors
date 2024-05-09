import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
                    <Nav.Link href="#action6" className='call-btn'><IoCall /> Call Now</Nav.Link>
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

