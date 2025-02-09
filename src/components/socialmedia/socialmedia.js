import React from "react";
import SocialMediaIcon from '../../images/socialmedia.jpg'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import NewsletterSignup from "../newslettersignup/newslettersignup";

const SocialMediaSection = () => {
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">VOLUNTEERS</span>
                    <h1 className="fw-bold">
                    Girls Inc. invites you to<span className="text-danger">spread our message.</span>
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={SocialMediaIcon}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container text-center my-5">
                {/* Section Header */}
                <div className="text-uppercase fw-bold bg-warning d-inline-block px-3 py-1 rounded">
                    How It Works
                </div>
                <h2 className="fw-bold mt-3">
                    You can amplify our story on social media and share why you believe in the mission of Girls Inc.
                </h2>
                <p className="fw-bold">This is a simple way to support and get involved with our work.</p>
                <p>
                    Dedicate 5 minutes every week on social media explaining who we are and what we do.
                    Start by following or subscribing to our social media accounts; we look forward to you joining the conversation!
                </p>

                {/* Wave Section */}
                <div className="position-relative">
                    <div className="bg-danger text-white py-5 mt-4">
                        <div className="text-uppercase fw-bold bg-warning d-inline-block px-3 py-1 rounded">
                            Join the Conversation
                        </div>
                        <h3 className="fw-bold mt-3">
                            Like, Follow, Share, and Subscribe to our Channels
                        </h3>
                    </div>
                </div>

                {/* Social Media Cards */}
                <div className="row justify-content-center mt-4">
                    {/* Facebook Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm p-4">
                            <FaFacebookF className="text-danger display-4 mb-3" />
                            <p>
                                Like our page and our status updates and share these with your friends.
                                Leave comments on our updates and share your own stories and photos.
                            </p>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                Girls Inc. of New Hampshire Facebook ↗
                            </a>
                        </div>
                    </div>

                    {/* Instagram Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm p-4">
                            <FaInstagram className="text-danger display-4 mb-3" />
                            <p>Follow along, like our posts, comment, and share your reflections.</p>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                Girls Inc. of New Hampshire Instagram ↗
                            </a>
                        </div>
                    </div>

                    {/* YouTube Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm p-4">
                            <FaYoutube className="text-danger display-4 mb-3" />
                            <p>Subscribe to our channel, watch our latest clips, like our videos, and share them with your friends and family.</p>
                            <a href="#" className="btn btn-outline-danger rounded-pill">
                                Girls Inc. of New Hampshire YouTube ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <NewsletterSignup />
        </>
    );
};

export default SocialMediaSection;
