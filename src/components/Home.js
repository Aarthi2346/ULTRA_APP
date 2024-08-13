import React from 'react';
// import doctorImage from '../doctor.jpeg';
import { Link } from 'react-router-dom';
import './Home.css';

function home() {
  return (
    <div class="content">
      <div>
    {/* <img src={doctorImage} alt="Doctor" className='docimg'/>  */}
    <h1 className="main-text">Ultra App</h1>
    <Link to="/home" className="explore-button">Explore Videos</Link> &nbsp;
    <p className="description-text">A sophisticated platform designed to visualize and interact with ultrasound videos. </p>
    </div>  
    </div>
    
  )
}

export default home
