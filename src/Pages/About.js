import React from 'react'
import './Aboutstyle.css';
function About() {
  return (
    <div >
      <h1 className='About_main'>About</h1>
     
      <div className='Profile_first'>
        <div className='Profile'>
          <h2 className='Profile_head'>Profile</h2>
          <p className='Profile_text'>To work in the most challenging position within an organization that provides an opportunity to learn and contribute.
            I am looking to build on my skills within challenging roles.
            </p>
        </div>
        <div className='Profile_img'>
         <img src='./Images/laptop-2443052_640.jpg' alt=''/>
         </div>
      </div>
      <div className='Profile_second'>
       <h2 className='second_main'>Education</h2>

        <div className='second_section'>
            <div className='Profile_img2'>
             <img  src='./Images/graduation-2394130_640.jpg' alt='graduation-2394130_640.jpg' />
            </div>
            <div  className='Profile2'>
              <h5 className='Profile_head2'>Masters in Business ecnomics & Management</h5>
              <h7 className='Profile_text2'>Selisian University, Opava,CZ</h7>
              <br />
              <h7 className='Profile_text2'>2021 Present</h7>
              
            
              <h5 className='Profile_head'>BBA</h5>
              <h7 className='Profile_text2'> Kannur University, India</h7>
              <br />
              <h7 className='Profile_text2'>2010 - 2013</h7>

            
              <h5 className='Profile_head'>Diploma in Graphic designing</h5>
              <h7 className='Profile_text2'> MAAC, India</h7>
              <br />
              <h7 className='Profile_text2'>2010</h7>

            </div>
        </div>
      
       
      </div >
      <div >
        <h2>Personal Profile</h2>
        <div>
         <img  src='./Images/graduation-2394130_640.jpg' alt='graduation-2394130_640.jpg' />

        </div>
        <div>
          <h2><span>Date of Birth</span><span>:</span><span>24/01/1992 </span></h2>
          <h2><span>Marital Status</span><span>:</span><span>Single  </span></h2>
          <h2><span>Nationality</span><span>:</span><span>Indian  </span></h2>
          <h2><span>Driving License </span><span>:</span><span>Indian International   </span></h2>
          <h2><span>Languages </span><span>:</span><span>English  </span><span>czech</span><span>Hindi</span><span>Italian</span> </h2>
         
        </div>
      </div>
    </div>
  )
}

export default About
