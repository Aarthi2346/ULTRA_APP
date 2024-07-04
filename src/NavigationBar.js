// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Import your CSS file for styling
//import styled from 'styled-components';
import ucfImage from './UCFlogo.webp';


const NavigationBar = () => {
  return (
    
    <nav className="navbar">
      <div className='navbar-left'>
      <img src={ucfImage} alt="UCF Logo" className='navbar-logo' />&nbsp;&nbsp;&nbsp;
      <span className="navbar-text">University of Central Florida</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
    
    
  );
};

export default NavigationBar;







