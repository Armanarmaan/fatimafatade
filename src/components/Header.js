import '../styles/Header.scss';
import $ from "jquery";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

function Header(){
  const imgLogo = require('../assets/logo.svg').default;
  const imgMenu = require('../assets/menu.svg').default;
  const imgClose = require('../assets/close.svg').default;

  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    $('.slide-to-right').addClass('slide-out');
    setTimeout(function () {
      setShowMenu(false);
    }, 700);

  }

  return (
    <div className='header'>
      <div className='menu-btn' onClick={() => setShowMenu(true)}>
        <img src={imgMenu} alt='menu' />
      </div>
      <div className='logo'>
        <NavLink exact to={'/'}>
          <img src={imgLogo} alt='fatimajannah' />
        </NavLink>
      </div>
      <div className='sub-title-mobile'>
        <p>PORTFOLIO ARCHIVE</p>
      </div>
      <div className='menus'>
        <NavLink exact activeClassName="active" to={'/'}>
          <div className='menu-item'>
            <p>ALL PROJECTS</p>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to={'/personal'}>
          <div className='menu-item'>
            <p>PERSONAL</p>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to={'/collaboration'}>
          <div className='menu-item'>
            <p>COLLABORATION</p>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to={'/about'}>
          <div className='menu-item'>
            <p>ABOUT</p>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to={'/contact'}>
          <div className='menu-item'>
            <p>CONTACT</p>
          </div>
        </NavLink>
      </div>
      <Modal id="ModalMenu" show={showMenu} onHide={handleCloseMenu} dialogClassName="slide-to-right">
        <div className='close-btn' onClick={handleCloseMenu}>
          <img src={imgClose} alt='cls' />
        </div>
        <Modal.Body>
          <div className='menus-mobile'>
            <NavLink exact activeClassName="active" to={'/'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>ALL PROJECTS</p>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/personal'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>PERSONAL</p>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/collaboration'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>COLLABORATION</p>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/about'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>ABOUT</p>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/contact'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>CONTACT</p>
              </div>
            </NavLink>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Header;