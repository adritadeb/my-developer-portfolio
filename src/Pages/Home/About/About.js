import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div class="card w-96 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">About me</h2>
                <p>I'm Adrita Deb Nath. A passionate Web-Developer who like to improve skills as a Developer. My experties are HTML, CSS, Bootstrap, Tailwind, JavaScript, Daisy UI, React, Firebase, React-Firebase hooks, React-Router. Also, I like to know trend and new technologies related to this sector.</p>
                <div class="card-actions justify-end">
                    <Link to='/contact' class="btn btn-primary">Contact Me</Link>
                </div>
            </div>
        </div>
    );
};

export default About;