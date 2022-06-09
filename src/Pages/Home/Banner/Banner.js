import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-black">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Hi! I'm Adrita!</h1>
                    <p class="py-6">I'm a Web Developer. A MERN Stack Developer who love to use React and Javascript.</p>
                    <button class="btn btn-primary">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;