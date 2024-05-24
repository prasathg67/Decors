import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaBlenderPhone, FaFacebookF, FaInstagram, FaPhoneAlt, FaPhoneSquareAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Contact() {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the year when the component mounts.
        setYear(new Date().getFullYear());
      }, []);

  return (
    <div  data-aos="fade-up" data-aos-easing="linear" id='contact'>
      <section className='contact_section py-lg-5 py-3'>
        <Container>
            <h2 className='text-center text-white mb-lg-5 mb-3'>Contact Us</h2>
            <Row>
                <Col lg={6}>
                    <Row>
                        <Col md={6}>
                            <h3>Our Ambition</h3>
                            <hr className='text-white'/>
                            <p className='text-white mt-3'>The core of Shakthi Decor business model includes trusting partnerships and operating with only the expectation that our partners become successful.</p>
                            <p className='text-white'>We trust to do the right thing the first time, every time. We look forward to the opportunity to serve you.</p>
                        </Col>
                        <Col md={6}>
                            <h3 className='text-md-center'>Quick Links</h3>
                            <hr className='text-white'/>
                            <ul className='mt-3 text-md-center p-0'>
                                <li className='mb-3'><a href="">Home</a></li>
                                <li className='mb-3'><a href="">About</a></li>
                                <li className='mb-3'><a href="">Services</a></li>
                                <li className='mb-3'><a href="">Gallery</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                        <Row>
                        <Col md={6}>
                            <h3 className='text-md-center'>Locations</h3>
                            <hr className='text-white'/>
                            <ul className='mt-3 p-0'>
                                <li className='mb-3'><FaLocationDot className='text-white' /><a href="https://www.google.com/maps/place/Shakthi+Decor/@11.9354809,79.8100607,17z/data=!3m1!4b1!4m6!3m5!1s0x3a536176f74b5df7:0x20491712d919c3eb!8m2!3d11.9354757!4d79.8149316!16s%2Fg%2F11b7hsqqhc?entry=ttu" target='_blank'> 233,Thiruvalluvar Salai, Near Nellithope Signal, Pondicherry-605013</a></li>
                                <li className='mb-3'><FaBlenderPhone className='text-white' /> <a href="tel:04134900281"> (0413)-4900 281</a></li>
                                <li className='mb-3'><FaPhoneSquareAlt className='text-white' /> <a href="tel:9944808181">+91 994480 8181</a></li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3 className='text-md-center'>Visit Us</h3>
                            <hr className='text-white'/>
                            <Image src={require("../assets/img/logo2.png")} className=" ms-md-auto me-md-auto d-md-block logo my-3 rounded-3" />
                            <div className='text-md-center mt-lg-5 mt-3'>
                                <a href="https://www.facebook.com/shakthi.decor.9?mibextid=ZbWKwL" className='me-2'><FaFacebookF className='con_icon' /></a>
                                <a href="" className='me-2'><FaInstagram className='con_icon ' /></a>
                                <a href="tel:9944808181"><IoLogoWhatsapp className='con_icon' /></a>
                            </div>                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </section>
      <footer className='py-4 footer_section'>
        <Container>
            <Row>
                <Col lg={6}>
                <p className='text-white m-lg-0 text-lg-start text-center'>Copyright &copy; {year} <span className="text-nowrap"> All Rights Reserved.</span></p>
                </Col>
                <Col lg={6}>
                    <p className='text-lg-end text-center m-0 text-white'>Developed By <a href="https://legendstechsolution.com/" target='_blank' className='text-white text-nowrap'>Legends Tech Solution</a></p>
                </Col>
            </Row>
        </Container>
      </footer>
    </div>
  )
}
