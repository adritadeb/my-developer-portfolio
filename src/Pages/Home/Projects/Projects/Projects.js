import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='projects' className='grid md:grid-cols-3 grid-cols-1 gap-20 px-20'>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body text-start">
                    <h2 class="card-title">Manufacturer Website</h2>
                    <div>
                        <p>• A website about wall painter tools manufacturing.</p>
                        <p>• Admin role is implemented in this project.  An admin can make another user admin and also can manage all products and orders.</p>
                        <p>• User can add their review on this site. Simple firebase authentication with email-password and google is implemented.</p>
                    </div>
                    <div class="card-actions">
                        <Link to='/detail1' class="btn btn-secondary btn-outline mt-3">Explore more</Link>
                    </div>
                </div>
            </div>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body text-start">
                    <h2 class="card-title">Warehouse Management</h2>
                    <div>
                        <p>• A website about book stocking.</p>
                        <p>• Users can deliver or restock books and also can add new books on this site.</p>
                        <p>• Simple firebase authentication with email-password and google is implemented. There is also an email verification system and a password reset system.</p>
                    </div>
                    <div class="card-actions">
                        <Link to='/detail2' class="btn btn-secondary btn-outline mt-3">Explore more</Link>
                    </div>
                </div>
            </div>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body text-start">
                    <h2 class="card-title">Independent Service Provider</h2>
                    <div>
                        <p>• A website about an individual wedding photographer.</p>
                        <p>• Users can go to the protected checkout page by clicking on the checkout button.</p>
                        <p>• Simple firebase authentication with email-password and google is implemented. There is also an email verification system and a password reset system.</p>
                    </div>
                    <div class="card-actions">
                        <Link to='/detail3' class="btn btn-secondary btn-outline mt-3">Explore more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;