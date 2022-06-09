import React from 'react';

const Contact = () => {
    return (
        <div className='px-24 py-10'>
            <h2 className='font-semibold text-center text-4xl'>Contact Me</h2>
            <div className='flex'>
                <input type="text" name="name" placeholder='Your name' />
                <input type="email" name="email" placeholder='Your email' />
            </div>
            <textarea name="message" cols="30" rows="10" placeholder='Give your message'></textarea>
        </div>
    );
};

export default Contact;