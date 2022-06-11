import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = event => {
        event.preventDefault();

        emailjs.sendForm('service_f2q9ti4', 'template_deqtcwq', event.target, 'AEZGxNs42YG3DbcID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    }

    return (
        <div className='px-24 py-10'>
            <h2 className='font-semibold text-center text-4xl'>Contact Me</h2>
            <form onSubmit={sendEmail}>
                <div className='flex'>
                    <input className='border border-black' type="text" name="name" placeholder='Your name' />
                    <br />
                    <input type="email" name="email" placeholder='Your email' />
                    <br />
                </div>
                <textarea name="message" cols="30" rows="10" placeholder='Give your message'></textarea>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;