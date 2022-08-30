import React from 'react';
import './Introstyle.css';
import { useNavigate } from "react-router-dom";


function Intro() {
    const navigate = useNavigate();
    const routeChange = () =>{ 
    navigate('/experience')

  }
  return (
    <div className='Intro_main'>
      <div className='Intro_main_content' >
          <h2 className='Intro_main_number'>6+</h2>
          <h3 className='Intro_main_text'>Years Of Experience Working</h3>
      </div>
      
      <div className='Intro_sub'>
            <div className='Intro_sub_content'>
                <h2 className='Intro_sub_text'>
                Being passionate about graphic design, I work in digital marketing and graphic designer.                </h2>
            
            </div>
            <div className='card_section'>
                
                <div>
                    <div className="card">
                       <img className='card_img' src="./Images/student-849821_640.jpg" alt="img" />
                       <div className='card_text'>
                            <h2 className='card_text_head'>graphic design and digital marketing</h2>
                            <h5 className='card_text_content'>Czech Republic</h5>
                            <button className='card_btn' onClick={routeChange}>Show more</button>
                       </div>
                    </div>
                </div>
                <div>
                    <div className='card2'>
                       <img className='card2_img' src="./Images/typing-849806_640.jpg" alt="img" />
                       <div className='card2_text'>
                            <h2 className='card2_text_head'>graphic design and digital marketing</h2>
                            <h5 className='card2_text_content'>multisystem Technology, uAE</h5>
                            <button className='card2_btn' onClick={routeChange}>Show more</button>
                       </div>
                    </div>
                </div>

            </div>   
            <div className='card_section2'>
                
                <div>
                    <div className="card">
                       <img className='card_img3' src="./Images/business-5475661_640.jpg" alt="img" />
                       <div className='card3_text'>
                            <h2 className='card_text_head'>graphic design</h2>
                            <h5 className='card_text_content'>AV PRO Dubai, UAE</h5>
                            <button className='card_btn' onClick={routeChange}>Show more</button>
                       </div>
                    </div>
                </div>
                <div>
                    <div className='card2'>
                       <img className='card2_img' src="./Images/workspace-2443050_640.jpg" alt="img" />
                       <div className='card2_text'>
                            <h2 className='card2_text_head'>graphic design and Office Admin</h2>
                            <h5 className='card2_text_content'>LAVENDER MEDIA/KOCHIN, INDIA</h5>
                            <button className='card2_btn' onClick={routeChange}>Show more</button>
                       </div>
                    </div>
                </div>

            </div>   
      </div>
    </div>
  )
}

export default Intro
