import React from 'react'
import { useNavigate } from "react-router-dom";
import './Smallsummery.css';
function Smallsummery() {
    const navigate = useNavigate();
  const routeChange = () =>{ 
    navigate('/experience')

  }
  return (
    <div className='Summery'>
        <h1 className='Summery_head'>Why hire me for your next project?</h1>
        <p className='Summery_text'>I love to work in User Experience & User Interface designing. Because I love to solve the design problem and find easy and better solutions to solve it. I always try my best to make good user interface with the best user experience.
        </p>
        <button  onClick={routeChange} className='Summery_btn'>Learn More</button>
      
    </div>
  )
}

export default Smallsummery
