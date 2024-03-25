import './header.css'
import React from 'react';
import { FaUser, FaSearch, FaShoppingBasket,} from 'react-icons/fa';
import menuIcon from '../../assets/icons/menuIcon.png';

function Header () {
    return (
      <header>
      <div className="logo">MENU</div>
      <div className='menu_logo'>
      <img src={menuIcon} alt="" />
      </div>
      <div className="icons">
        <FaShoppingBasket className="icon" />
        <FaUser className="icon" />
        <FaSearch className="icon" />
      </div>
    </header>
    )
}

export default Header;  