import React from 'react';
import './contact.css';

export default function Contact() {
    return (
        <div>
            <form>
                <input className='contactFormName' placeholder='Name'></input>
                <input className='contactFormEmail' placeholder='E-mail'></input>
                <input className='contactFormMessage' placeholder='Message'></input>
            </form>
            <button>Send Message</button>
        </div>
    )
}