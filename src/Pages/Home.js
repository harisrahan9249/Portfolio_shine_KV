import React from 'react'
import './Homestyle.css';
import { useNavigate } from "react-router-dom";
import Intro from '../Components/Intro';

function Home() {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    navigate('/about')

  }
  return (
    <>
      
      <div className='MAin_Head'>
          <div className='main_image'>
            <img  src='./Images/imge_1.jpeg' alt='./Images/IMG_0755 (1).jpg' className='MAin_Head'/>
            
          </div>
          <div className='content'>
            
            <div className='MAin_Head_content'>
                <h5><span className='MAin_Head_content_span' >Hello, I'm</span></h5>
                <h2 className='MAin_Head_content_name'>Karothe Valappil Shine</h2>
            </div>
            <div className='MAin_Head_btn'>
              <button onClick={routeChange} className='MAin_Head_btn1'>MORE ABOUT ME</button>
              <button className='MAin_Head_btn2'>HIRE ME</button>
            </div>
            
  
          </div>
        
      </div>
      <Intro />

    </> 
  )
}

export default Home
