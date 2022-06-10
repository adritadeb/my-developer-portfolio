import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div class="card md:w-1/2 shadow-xl md:ml-80 ml-8 mt-5">
            <div class="card-body text-start">
                <h2 class="card-title text-3xl uppercase font-bold">About me</h2>
                <p className='py-5'>I'm Adrita Deb Nath. I am a Web-Developer. I like to improve my skills as a Developer. My experties are HTML, CSS, Bootstrap, Tailwind, JavaScript, React and more. Also, I like to know trendy and new technologies related to this sector.</p>
                <p>Singing is one of my hobbies. I also like batminton, cricket and gardening. Reading book is my usual pass-time work.</p>
                <div class="card-actions">
                    <Link to='/contact' class="btn btn-secondary btn-outline text-bold mt-3">Contact Me</Link>
                </div>
            </div>
        </div>
    );
};

export default About;