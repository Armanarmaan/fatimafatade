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
  const [animationInProgress, setAnimationInProgress] = useState(false);

  const handleCloseMenu = () => {
    if (!animationInProgress) {
      setAnimationInProgress(true);
      $('.slide-to-right').addClass('slide-out');
      setTimeout(function () {
        setShowMenu(false);
        setAnimationInProgress(false);
      }, 700);
    }
  }

  const handleMenu = () => {
    if (!animationInProgress) {
      setAnimationInProgress(true);
      if (showMenu) {
        handleCloseMenu();
      } else {
        setShowMenu(true);
        setTimeout(function () {
          setAnimationInProgress(false);
        }, 700);
        
      }
    }
  }

  return (
    <div className='header'>
      <div className='menu-btn' onClick={() => handleMenu(true)}>
        <img src={imgMenu} alt='menu' />
      </div>
      <div className='logo'>
        <NavLink exact="true" to={'/'}>
          <img src={imgLogo} alt='fatimajannah' />
        </NavLink>
      </div>
      <div className='sub-title-mobile'>
        <p>PORTFOLIO ARCHIVE</p>
      </div>
      <div className='menus'>
        <NavLink exact="true" activeclassname="active" to={'/'}>
          <div className='menu-item'>
            <p>ALL PROJECTS</p>
          </div>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to={'/personal'}>
          <div className='menu-item'>
            <p>PERSONAL</p>
          </div>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to={'/collaboration'}>
          <div className='menu-item'>
            <p>COLLABORATION</p>
          </div>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to={'/about'}>
          <div className='menu-item'>
            <p>ABOUT</p>
          </div>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to={'/contact'}>
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
            <NavLink exact="true" activeclassname="active" to={'/'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>ALL PROJECTS</p>
              </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to={'/personal'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>PERSONAL</p>
              </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to={'/collaboration'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>COLLABORATION</p>
              </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to={'/about'}>
              <div className='menu-item' onClick={handleCloseMenu}>
                <p>ABOUT</p>
              </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to={'/contact'}>
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