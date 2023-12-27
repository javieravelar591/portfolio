import React from 'react';
import './contact.css';
import { Element } from 'react-scroll';

export const Contact = () => {
    return (
        <Element name='contact'>
            <section className='contact'>
                <div id='contact'>
                    <h1 className='contact-header'>Contact Me</h1>
                    <span>Please fill out form to discuss work opportunities.</span>
                    <form className='contact-form'>
                        <input type='text' className='name' placeholder='Full Name' />
                        <input type='email' className='email' placeholder='Your email' />
                        <textarea name='message' className='message' rows='5' placeholder='Your message'/>
                        <button type='submit' value='Send' className='submit-btn'>Submit</button>
                    </form>
                </div>
            </section>
        </Element>
    );
}

export default Contact;
