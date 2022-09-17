import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact=() => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_w8wbsxd","template_5766yci", form.current, 'alHEQ2qtoTdpffHTu')


      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    };

    
  return (
    <div>
        <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <div>
                        <input type="text" placeholder='Name' name='name'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Email Address' name='email'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Your Contact' name='contact_number'/>
                    </div>
                    <div>
                        <textarea type="text" placeholder='Your Message' name='message'/>
                    </div>
                    <div>
                        <input type="submit" value='Send Message'/>
                    </div>
                </div>

            </form>

        </div>
      
    </div>
  )
}

export default Contact
