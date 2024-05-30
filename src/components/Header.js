import { useEffect, useState } from 'react';
import {Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall, IoCallSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll-trigger';


export default function Header({variant}) {
  const navigate = useNavigate()
    const [isSticky, setIsSticky] = useState(false);
    const goToHome=()=>{
      navigate('/');
  
    }
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
    {/* Navabr section */}      
      <div className={`header__sticky ${ variant ? variant : "" } ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
        <section className="header_address fixed-top pt-2">
          <ul className='hide_mobile d-flex justify-content-end'>
            <li className='me-3 d-lg-block d-none pe-2'><FaLocationDot className='ad_icon me-2' /><a href="https://www.google.com/maps/place/Shakthi+Decor/@11.9354809,79.8100607,17z/data=!3m1!4b1!4m6!3m5!1s0x3a536176f74b5df7:0x20491712d919c3eb!8m2!3d11.9354757!4d79.8149316!16s%2Fg%2F11b7hsqqhc?entry=ttu" target='_blank' className='text-white' >233,Thiruvalluvar Salai, Near Nellithope Signal, Pondicherry-605013</a></li>
            <li className='d-lg-block d-none pe-5'><IoCallSharp /><a className='text-white' href="tel:9944808181">99448 08181</a></li>
          </ul>
        </section>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar py-3">
            <Container fluid >
            <Navbar.Brand href="#"><Image
                src={require("../assets/img/logo2.png")}
                className="logo rounded-3" onClick={()=>navigate('/')}
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
                    src={require("../assets/img/logo2.png")}
                    className="logo"
                ></Image>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link  onClick={goToHome} className='text-white active'>Home<Image src={require('../assets/img/menu-icon.png')}/></Nav.Link>
                    <Nav.Link href='#about' to="about" spy={true} smooth={true} offset={150} duration={500} className='text-white'>About <Image src={require('../assets/img/menu-icon.png')}/></Nav.Link>
                    <Nav.Link href='#gallery' to="gallery" spy={true} smooth={true} offset={50} duration={500} className='text-white'>Gallery<Image src={require('../assets/img/menu-icon.png')}/></Nav.Link>
                    <Nav.Link href='#service' to="service" spy={true} smooth={true} offset={150} duration={500} className='text-white'>Services<Image src={require('../assets/img/menu-icon.png')}/></Nav.Link>
                    <Nav.Link href='#contact' to="contact" spy={true} smooth={true} offset={50} duration={500} className='text-white'>Contact<Image src={require('../assets/img/menu-icon.png')}/></Nav.Link>
                    <Nav.Link href='#book' to="contact" spy={true} smooth={true} offset={50} duration={500} className='call-btn'><IoCall /> Book Now</Nav.Link>
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

