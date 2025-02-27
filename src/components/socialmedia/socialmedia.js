import React from "react";
import SocialMediaIcon from '../../images/socialmedia.jpg'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import NewsletterSignup from "../newslettersignup/newslettersignup";

const SocialMediaSection = () => {
    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                        Become A Social Media Ambassador
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        Girls Inc. invites you to <span className="text-danger">spread our message.</span>
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={SocialMediaIcon}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="container text-center my-5">
                {/* Section Header */}
                <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                    How it works
                </span>
                <br />
                <h2 className="fw-bold mt-3">
                    You can amplify our story on social media and share why <br />you believe in the mission of Girls Inc.
                </h2>
                <br />
                <p>
                    <span className="fw-bold">This is a simple way to support and get involved with our work.</span> Dedicate 5 minutes every week on social media <br />explaining who we are and what we do.
                    Start by following or subscribing to our social media accounts; we look forward <br />to you joining the conversation!
                </p>
                <br />
                {/* Wave Section */}
                <div className="" style={{ backgroundColor: '#ED1849' }}>
                    <div className="text-white py-5 mt-4">
                        <div className="text-uppercase fw-bold bg-warning d-inline-block px-3 py-1 rounded text-black" style={{ backgroundColor: "#eeff41" }}>
                            Join the Conversation
                        </div>
                        <h3 className="fw-bold mt-3">
                            Like, Follow, Share, and Subscribe to our <br />Channels
                        </h3>
                    </div>
                </div>
                <br/>
                <br/>
                {/* Social Media Cards */}
                <div className="row justify-content-center mt-4">
                    {/* Facebook Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm p-4">
                            <div className="text-center"><FaFacebookF className="text-danger display-4 mb-3" /></div><br/><br/>
                            <p>
                                Like our page and our status updates and share these with your friends.
                                Leave comments on our updates and share your own stories and photos.
                            </p>
                            <br/>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                Girls Inc. of Worcester Facebook ↗
                            </a>
                        </div>
                    </div>

                    {/* Instagram Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm p-4">
                        <div className="text-center"><FaInstagram className="text-danger display-4 mb-3" /></div><br/><br/>
                            <p>Follow along, like our posts, comment, and share your reflections of what's happening around the girlsincWorcester.</p><br/>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                Girls Inc. of Worcester Instagram ↗
                            </a>
                        </div>
                    </div>

                    {/* YouTube Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm p-4">
                        <div className="text-center"><FaYoutube className="text-danger display-4 mb-3" /></div><br/><br/>
                            <p>Subscribe to our channel, watch our latest clips, like our videos, and share them with your friends and family.</p><br/>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                Girls Inc. of Worcester YouTube ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container"><NewsletterSignup /></div>
            
        </>
    );
};

export default SocialMediaSection;
