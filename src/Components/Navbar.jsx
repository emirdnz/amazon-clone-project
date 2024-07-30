import React from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';
import logo from './images/amazon_logo.png';





const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="navbar__logo">
          <a href="/">
            <img src={logo} alt="Amazon Logo" className="amazon-logo"/>
          </a>
        </div>
        <div className="navbar__location">
          <FaMapMarkerAlt />
          <div className="navbar__locationText">
            <span className="navbar__optionLineOne">Teslimat konumu:</span>
            <span className="navbar__optionLineTwo">İstanbul 3400</span>
          </div>
        </div>
        <div className="navbar__search">
          <input type="text" className="navbar__searchInput" placeholder="Ara Amazon.com.tr" />
          <FaSearch className="navbar__searchIcon" />
        </div>
        <div className="navbar__nav">
          <div className="navbar__option">
            <span className="navbar__optionLineOne">Merhaba, Giriş yapın</span>
            <span className="navbar__optionLineTwo">Hesap ve Listeler</span>
          </div>
          <div className="navbar__option">
            <span className="navbar__optionLineOne">İadeler</span>
            <span className="navbar__optionLineTwo">ve Siparişler</span>
          </div>
          <div className="navbar__optionBasket">
            <FaShoppingCart />
            <span className="navbar__optionLineTwo navbar__basketCount">1</span>
            <span className="navbar__optionLineTwo">Alışveriş Sepeti</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
