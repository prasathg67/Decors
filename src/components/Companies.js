import React from 'react'
import { Container, Image } from 'react-bootstrap'

export default function Companies() {
  return (
    <div>
        <Container className=' py-lg-5 py-3'>
          <h2 className='text-center mb-lg-4 mb-3'>Our Clients</h2>
            <marquee scrollamount='10'>
                <Image src={require('../assets/img/Accord-Logo.png')} className='pe-5' />
                <Image src={require('../assets/img/jayaram.png')} className='pe-5' />
                <Image src={require('../assets/img/sunway.jpg')} className='pe-5' />
                <Image src={require('../assets/img/hotel-atithi-pondicherry-logo.jpg')} className='pe-5' />
            </marquee>
        </Container>
    </div>
  )
}
