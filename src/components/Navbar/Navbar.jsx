import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdOutlineLegendToggle } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="Website Logo" />
      <MdOutlineLegendToggle onClick={openMenu} className="icon-open"/>
      <ul ref={menuRef} className='nav-menu'>
      <MdClose onClick={closeMenu} className="icon-close"/>
        <li className={menu === 'home' ? 'active' : ''}>
          <AnchorLink className='anchor-link' href='#home' ><p onClick={() => setMenu('home')}>Home</p></AnchorLink>
        </li>
        <li className={menu === 'about' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={() => setMenu('about')}>About Me</p></AnchorLink>
        </li>
        <li className={menu === 'services' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={() => setMenu('services')}>Services</p></AnchorLink>
        </li>
        <li className={menu === 'work' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#mywork' ><p onClick={() => setMenu('work')}>Portfolio</p></AnchorLink>
        </li>
        <li className={menu === 'contact' ? 'active' : ''}>
        <AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>
        </li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
