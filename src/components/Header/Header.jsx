import './header.css'
import React from 'react';
import { FaUser, FaSearch, FaShoppingBasket,} from 'react-icons/fa';
import menuIcon from '../../assets/icons/menuIcon.png';

function Header () {
    return (
      <header>
      <div className="logo"><a href="@">MENU</a></div>
      <div className='menu_logo'>
      <img src={menuIcon} alt="" />
      </div>
      
      <div className="icons">
        <FaSearch className="icon" />
        <a href="/basket"><FaShoppingBasket className="icon" /></a>
        <a href="/login"><FaUser className="icon" /></a>

      </div>
    </header>
    )
}

export default Header; 