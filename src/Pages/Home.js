import React from 'react'
import './Homestyle.css';
import { useNavigate } from "react-router-dom";
import Intro from '../Components/Intro';
import Myintro from '../Components/Myintro';
import Serviceintro from '../Components/Serviceintro';


function Home() {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    navigate('/about')

  }
  const Contact = () =>{ 
    navigate('/Contact')

  }
  return (
    <div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#202C35" fill-opacity="1"  d="M0,128L34.3,112C68.6,96,137,64,206,53.3C274.3,43,343,53,411,58.7C480,64,549,64,617,90.7C685.7,117,754,171,823,192C891.4,213,960,203,1029,186.7C1097.1,171,1166,149,1234,133.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>       */}
          <div className='MAin_Head'>
          <div className='main_image'>
            <img  src='./Images/imge_1.jpeg' alt='./Images/IMG_0755 (1).jpg' className='MAin_Head'/>
            
          </div>
          <div className='content'>
            
            <div className='MAin_Head_content'>
                <h5><span className='MAin_Head_content_span' >Hello, I'm</span></h5>
                <h2 className='MAin_Head_content_name'>Karoth Valappil Shine</h2>
            </div>
            <div className='MAin_Head_btn'>
              <button onClick={routeChange} className='MAin_Head_btn1'>MORE ABOUT ME</button>
              <button onClick={Contact}className='MAin_Head_btn2'>HIRE ME</button>
            </div>
            
  
          </div>
          
          
          
        
      </div>
    <div className='svg_foot'>
        
       </div>
      <Intro />
      <Myintro />
      <Serviceintro />
      
      

    </div> 
  )
}

export default Home
