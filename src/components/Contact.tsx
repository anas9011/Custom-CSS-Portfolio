import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';



const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2'>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos="fade-up">Get in touch</h2>
                <p className='contact-text' data-aos="fade-up">
                    Drop me a line, give me a call, or send me a message by submitting the form. 
                </p>
                <div className='contact-flex' data-aos="fade-up">
                    <AiOutlineMail size={30} /> anasshakeel@gmail.com
                </div>
            </div>
            <div className='contact-flex' data-aos="fade-up">
                    <BsTelephone size={30} /> 0323-2207790
                </div>
                <div className='contact-space'>
                    <div className='form' data-aos="fade-up">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className='input-field'
                        id='name'/>
                    </div>
                </div>
                <div className='form' data-aos="fade-up">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        className='input-field'
                        id='email'/>
                    </div>
                    <div className='flex flex-col gap-1'data-aos="fade-up">
                        <label htmlFor="msg">Message</label>
                        <textarea
                        className=' textarea-field'
                        id='msg' rows={8}>
                        </textarea>
                
                    <button className='button'data-aos="fade-up">Send
                        
                    </button>
</div>
        </div>
      
    </div>
  );
};

export default Contact;
