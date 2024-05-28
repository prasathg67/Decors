import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";

export default function Testimonial() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <section className="testimonial_section py-lg-5 py-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <Container >
            <h2 className="text-center mb-lg-4 mb-3">What Our Client Say</h2>
            <p className="text-center mb-lg-5 my-3"><b> We are a trusted interior designer company in Puducherry. Over 50+ experts, 5,000 homes already handover!</b></p>
            <Slider {...settings}>
                <div className="px-2">
                    <Card>
                        <Card.Img variant="top" src={require('../assets/img/test1.png')} />
                        <Card.Body>
                            <Card.Title className="text-center">Ragu Ram</Card.Title>
                            <Card.Text>
                            I met many interior designers till date, but when I visit Shakthi Decor, and discussed the details about the home. I realised that he is the perfect
                            design for my interior design work. The look and feel we wanted for our home. But after meeting him I was satisfied
                            with my choice. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="px-2">
                    <Card>
                        <Card.Img variant="top" src={require('../assets/img/test2.png')} />
                        <Card.Body>
                            <Card.Title className="text-center">Venkat Rajagopalan</Card.Title>
                            <Card.Text>
                            Shakthi Decor Interior Designs brought an unparalleled level of creativity to my home renovation project. Their attention to detail and ability to capture my vision exceeded all expectations. Highly recommend them for anyone looking to elevate their space.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="px-2">
                    <Card>
                        <Card.Img variant="top" src={require('../assets/img/test3.png')} />
                        <Card.Body>
                            <Card.Title className="text-center">Sachu Sivam</Card.Title>
                            <Card.Text>
                            Working with Shakthi Decor Interior Designs was an absolute pleasure. They took the time to understand my style preferences and incorporated them seamlessly into the design. The end result was a space that felt both elegant and comfortable.
                            </Card.Text>
                        </Card.Body>
                    </Card>                
                </div>
                <div className="px-2">
                    <Card>
                        <Card.Img variant="top" src={require('../assets/img/test4.png')} />
                        <Card.Body>
                            <Card.Title className="text-center">srikanth krishnamurthy</Card.Title>
                            <Card.Text>
                            I couldn't be happier with the transformation Shakthi Decor Interior Designs brought to my office space. Their innovative designs not only enhanced productivity but also created a welcoming environment for both clients and employees. Exceptional work all around.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="px-2">
                    <Card>
                        <Card.Img variant="top" src={require('../assets/img/test5.png')} />
                        <Card.Body>
                            <Card.Title className="text-center">HARI PRASATH</Card.Title>
                            <Card.Text>
                            Shakthi Decor Interior Designs completely transformed my outdated kitchen into a modern culinary oasis. From the initial consultation to the final reveal, their team was professional, communicative, and full of fresh ideas. I'm thrilled with the results!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="px-2">
                    <Card>
                        <Card.Img variant="top" src={require('../assets/img/test6.png')} />
                        <Card.Body>
                            <Card.Title className="text-center">Diana S L</Card.Title>
                            <Card.Text>
                            Shakthi Decor Interior Designs turned my vision for a cozy reading nook into a reality. Their ability to blend functionality with aesthetics is truly remarkable. Every time I step into that space, I feel inspired and at peace. Thank you for exceeding my expectations!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Slider>
        </Container>
    </section>
  );
}