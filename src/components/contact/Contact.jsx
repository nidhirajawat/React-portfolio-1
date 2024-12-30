import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import './contact.css';

const Contact = () => {

    //  web3Forms
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b3b32bce-1a47-4639-b153-8cb1ede87a2f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <FaEnvelope className="icon" /> 
                        <p>nidhirajawat321@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <FaPhone className="icon" /> 
                        <p>+91 722-400-9822</p>
                    </div>
                    <div className="contact-detail">
                        <FaMapMarkerAlt className="icon" /> 
                        <p>Indore, Madhya Pradesh</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='' />

                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />

                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
