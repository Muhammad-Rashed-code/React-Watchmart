import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='background'>
            <div className="container d-flex">

                <div className="first">
                    <h4>More About Company</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ipsa, cumque nobis pariatur dolorum aperiam ratione dolore eaque laboriosam ipsam.</p>
                </div>

                <div className="second">
                    <h4>Keep Connected</h4>
                    <p>Facebook</p>
                    <p>Twiter</p>
                    <p>Instagram</p>

                </div>

                <div className="third">
                    <h4>Contact Information</h4>
                    <p>Email: Comming Soon</p>
                    <p>Phone: Comming Soon</p>


                </div>
            </div>

        </div>
    );
};

export default Footer;