import React from 'react';

const ProjectDetail1 = () => {
    return (
        <div className='ml-40'>
            <h3 className='text-4xl font-semibold text-center'>Manufacturer Website</h3>
            <div className='flex justify-evenly'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div>
                <a href="https://manufacturer-website-518a2.web.app/">Live-site</a>
                <a href="https://github.com/adritadeb/manufacturer-website-client">Client-side code</a>
                <a href="https://github.com/adritadeb/manufacturer-website-server">Server-side code</a>
            </div>
            <div className='text-start'>
                <p>On the home page, a navbar, banner, tools, business summary, reviews, footer, and two extra sections are add.</p>
                <p>In the tools section, there are three tools shown. There is a purchase button on each tool card. By clicking on this button, it will take on the protected purchase page, where we can purchase tools. Tools quantity has to be within the minimum quantity to available quantity.</p>
                <p> When a user login the dashboard page link will show in the navbar. On this page, a simple user will see three pages. My orders, add a review and my profile. The user's order will show on my orders page. Users can delete unpaid orders. A user can also add a review on the add review page. The user's added review will show on the home page.</p>
                <p>My profile page will show in simple user and admin cases. Here user's profile will be shown, where the user can update or insert his document. When the admin logs in, there will also show manage all orders, add a product, make an admin and manage products page.</p>
                <p>On the manage all orders page, all orders will show. Admin can delete unpaid orders and update the status of paid orders. Admin can add a product in add a product page. The added products will show on the home page. On the make admin page, an admin can make another user admin, and on the manage products page, the admin can delete products.</p>
                <p>On the login and signup page, simple email-password and google based authentication have applied. On the blogs page, there are five questions answered, and on my portfolio page, there gave my name, email, educational background, list of technologies or skills I have as a web developer, and my three best projects link.</p>
            </div>
        </div>
    );
};

export default ProjectDetail1;