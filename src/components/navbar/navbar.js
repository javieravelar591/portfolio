import React from 'react';
import './navbar.css';
import logo from '../../resources/logo.png';
import contactImage from '../../resources/contactmeicon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='topnav'>
        <img src={ logo } alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link to='intro' smooth duration={ 500 } className="desktopMenuListItem">Home</Link>
            <Link to='aboutme' smooth duration={ 500 } className="desktopMenuListItem">About</Link>
            <Link to='portfolio' smooth duration={ 500 } className="desktopMenuListItem">Portfolio</Link>
            <Link to='clients' smooth duration={ 500 } className="desktopMenuListItem">Clients</Link>
        </div>
        <button className='contactMeBtn'>
            <img src={ contactImage } alt='contact-icon' className='contactImage'/> Contact Me
        </button>
    </nav>
  )
}

export default Navbar;