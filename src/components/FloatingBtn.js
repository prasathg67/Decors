import React from 'react';
import { FloatButton } from 'antd';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
const FloatingBtn = () => (
  

  <>
    <FloatButton.Group
      shape="circle"
      style={{
        right: 24,
      }}
    >
      
      <FloatButton className='fb_float' icon={<FaFacebook className='float_fb ' />} />
      <FloatButton className='insta_float' icon={<FaInstagram className='float_insta'/>} />
      <FloatButton className='whats_float' icon={<IoLogoWhatsapp className='float_whats'/>} onClick={()=>{window.location.href('')}} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);
export default FloatingBtn;