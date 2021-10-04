import React from 'react';
import img from '../../images/cover_2.png';
import profile from '../../images/profile.png';
import './About.css';

const About = () => {
    return (
        <div>
            <div>
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="mx-md-5 px-5">
                <h2 className="mt-3">About Us</h2>

                <div className="d-flex align-items-center mb-5 flex-column">
                    <div className="flex-shrink-0 image-container mx-5 my-md-3 my-1">
                        <img src={profile} alt="..." />
                    </div>
                    <div className="flex-grow-1 ms-3 text-start">
                        <p>We are musicians. Music is like happiness. We try to share with new comers what we have learned from our journey. A person can always be happy with music. So, we sing. Music is for everybody music for peace.</p>
                    </div>
                </div>
                <div className="my-5">
                    <h4 className="mb-4">Leave Your Comments Here</h4>
                    <div className="contact-form">
                        <form className="d-flex align-items-center justify-content-center flex-column">
                            <input type="text" name="name" id="" placeholder="Your Name" />
                            <input type="email" name="email" id="" placeholder="Your Email" />
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                            <button type="submit" className="mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default About;