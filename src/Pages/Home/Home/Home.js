import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='px-24 py-10'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;