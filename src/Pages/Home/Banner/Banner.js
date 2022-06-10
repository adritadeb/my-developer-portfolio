import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img width={450} src={banner} className="rounded-lg shadow-2xl md:ml-40" alt='' />
                <div className='text-white text-start md:p-0 pl-8 pt-5 max-w-lg'>
                    <h1 className="text-5xl font-bold">Hi! I'm Adrita!</h1>
                    <p className="py-6 text-2xl">A Front-End Developer who love to use React and Javascript.</p>
                    <Link to='/resume' className="btn btn-secondary btn-outline mt-8">Download Resume</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;