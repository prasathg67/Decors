import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

export default function Carol() {
  return (
    <Carousel interval={2000}>      
      <Carousel.Item>
        <Image src={require("../assets/img/curtains1.jpg")} className='slider'  text="Second slide" />
        <Carousel.Caption>
          <h2>BLINDS</h2>
          <p>Explore our range of blinds, offering privacy, light control, and sophistication to any space. Crafted with precision and durability in mind.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("../assets/img/pvc-blinds.jpg")} className='slider' text="First slide" />
        <Carousel.Caption>
          <h2>Blinds</h2>
          <p>Crafted from premium fabrics and designed with timeless elegance, our curtains add both style and functionality to your home decor.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("../assets/img/mosquito-meh2.jpg")} className='slider'  text="Third slide" />
        <Carousel.Caption>
          <h2>MOSQUITO WINDOW MESH</h2>
          <p>Shield your home from unwanted pests with our high-quality mosquito mesh, designed for ultimate protection and comfort.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
