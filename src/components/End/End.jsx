import React, { useState } from 'react';
import './End.css'



function End() {
    return (
      <footer>
        <div className='containerFooter'>
          <div className='footer-content'>
            <h3>Contact Us</h3>
            <p>E-mail:info@example.com</p>
            <p>Phone:+996 708 263 702</p>
            <p>Address: Your Address 123 street</p>
          </div>
          <div className='footer-content'>
            <h3>Quick Links</h3>
            <ul className="list">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            </div>
            <div className='footer-content'>
              <h3>Follow Us</h3>
              <ul className="follow">
                <li><a href="">instagram</a></li>
                <li><a href="">Tik Tok</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">VK</a></li>
            </ul>
            </div>
            
           </div>
           <div className='bottom-bar'>
           <div className="end_text">
                <p> LULU LOOK </p>
            </div>
            <p>&copy; 2024 your company. All rights reserved</p>
            
           </div>
         
      </footer>
    );
}

export default End;
