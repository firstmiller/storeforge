import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <div className="footer__logo"><Link to='/'>StoreForge</Link></div>
        <div className="footer__nav">
          <div className="footer__contacts">Контактная информация</div>
          <div className="footer__about">О нас</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
