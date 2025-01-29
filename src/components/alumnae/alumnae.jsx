import React from "react";
import AlumnaeImg from '../../images/AlumnaeImg.jpg'
import AlumaneLogo from '../../images/alumane_logo.png'
import Event1 from '../../images/event1.png';
import NewsletterSignup from "../newslettersignup/newslettersignup";

const Alumnae = () => {
    
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Girls Inc. Alumnae Association</span>
                    <h1 className="fw-bold">
                        A dynamic network of incredible alums who have been part of <span className="text-danger">Girls Inc.</span>
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={AlumnaeImg}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container py-5">
                {/* First Section */}
                <div className="text-center my-5">
                    <span className="badge bg-warning text-dark mb-3">ALUMNAE</span>
                    <h3 className="fw-bold">
                        Launched in 2022, the <span className="text-danger">Girls Inc. Alumnae Association</span> is designed specifically for individuals across the US and Canada who participated in Girls Inc. programming including those from Girls Clubs of America before 1990.
                    </h3>
                    <p className="text-muted mt-3">
                        <strong>A continuation of the Girls Inc. Experience, the free Alumnae Association</strong> is open to alums and high school seniors, ages 18 and over. Members gain invaluable career advice, engage in inspirational conversations with trailblazing women leaders, and benefit from many other opportunities to continue to unlock their fullest potential!
                    </p>
                </div>
                <br/>
                {/* Second Section */}
            </div>
            <div className="container text-center">
                <img
                    src={AlumaneLogo}
                    alt="Girls Inc. Alumnae Association Logo"
                    className="img-fluid mb-4"
                    style={{ maxWidth: "200px" }}
                />
                <h2 className="fw-bold">Are you a Girls Inc. or Girls Club Alum?</h2>
                <p>
                    Join the Girls Inc. Alumnae Association, and reunite with fellow Girls Inc. members or make new connections that will last a lifetime!
                </p>
                <p>
                    Let’s shape the future together. Join us now and be part of a community that inspires, supports, and celebrates your success!
                </p>
                <p>
                    Join the Alumnae Association today through the <a href="#">web</a> or download the free Girls Inc. Alumnae Association mobile app
                    on <a href="#">Google Play</a> and <a href="#">Apple stores</a>.
                </p>

                <h3 className="fw-bold mt-5">Events</h3>
                <p>
                    <strong>Get access to live,</strong> virtual, and in-person events and interviews that are only available to Girls Inc. alumnae.
                </p>

                <div className="row mt-4">
                <div className="col-md-2">
                    </div>
                    <div className="col-md-2">
                        <img src={Event1} alt="Event 1" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-2">
                        <img src={Event1} alt="Event 2" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-2">
                        <img src={Event1} alt="Event 3" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-2">
                        <img src={Event1} alt="Event 4" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
            <br/>
            <NewsletterSignup />
        </>
    );
};

export default Alumnae;
