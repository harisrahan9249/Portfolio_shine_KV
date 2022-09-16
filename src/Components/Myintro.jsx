import React from 'react';
import './Myintro.css';

function Myintro() {
  return (
    <div className='Myintro'>
        <div className='Myintro_image'>
            <img className='Myintro_img' src="./Images/image.jpeg" alt="Myintro" />
        </div>
        <div className='Myintro_content'>
            <h5 className='Myintro_content_text' >my intro</h5>
            <h3 className='Myintro_content_text2'>
                to work in the most challenging position within an organization that provides an oppurtunity to learn and contribute.
                I'm looking to build on my skills within challenging roles.
            </h3>
            <h3><span className='Myintro_content_text3'>Name</span><span className='Myintro_content_text4'>:</span><span className='Myintro_content_text5'>Karoth Valappil Shine</span></h3>
            <h3><span className='Myintro_content_text3'>Age</span><span className='Myintro_content_text6'>:</span><span className='Myintro_content_text5'>30</span></h3>
            <h3><span className='Myintro_content_text3'>Email</span><span className='Myintro_content_text4'>:</span><span className='Myintro_content_text7'>Shinekaroth@gmail.com</span></h3>
            <button className='Myintro_content_btn'>Download CV</button>
   
        </div>
      
    </div>
  )
}

export default Myintro
