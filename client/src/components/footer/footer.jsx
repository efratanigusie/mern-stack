
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)', padding: '20px', textAlign: 'center',marginTop: '20px' }}>
      <p style={{ marginBottom: '20px' }}>Contact Us</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <a href="https://www.facebook.com"><FaFacebook style={{ marginRight: '10px', color: '#3b5998', fontSize: '24px' }} /></a>
        <a href="https://www.twitter.com"><FaTwitter style={{ marginRight: '10px', color: '#1da1f2', fontSize: '24px' }} /></a>
        <a href="https://www.instagram.com"><FaInstagram style={{ color: '#c13584', fontSize: '24px' }} /></a>
      </div>
      <p >Ethiopia, Addis Ababa</p>
      
    </footer>
  );
}

export default Footer;



