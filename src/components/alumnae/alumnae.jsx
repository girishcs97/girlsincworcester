import React from "react";
import AlumnaeImg from '../../images/AlumnaeImg.jpg'
import AlumaneLogo from '../../images/alumane_logo.png'
import Event1 from '../../images/event1.png';
import NewsletterSignup from "../newslettersignup/newslettersignup";

const Alumnae = () => {

    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                        Girls Inc. Alumnae Association
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        A dynamic network of incredible alums who have been part of <span className="text-danger">Girls Inc.</span>
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={AlumnaeImg}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="container py-5">
                {/* First Section */}
                <div className="text-center my-5">
                    <span className="badge text-dark mb-3" style={{ backgroundColor: "#eeff41" }}>ALUMNAE</span>
                    <h3 className="fw-bold">
                        Launched in 2022, the <span className="text-danger">Girls Inc. Alumnae Association</span> is <br />designed specifically for individuals across the US and <br />Canada who participated in Girls Inc. programming <br />including those from Girls Clubs of America before 1990.
                    </h3>
                    <p className="text-black mt-3">
                        <strong>A continuation of the Girls Inc. Experience, the free Alumnae Association</strong> is open to alums and high school seniors, ages <br />18 and over. Members gain invaluable career advice, engage in inspirational conversations with trailblazing women leaders, <br />and benefit from many other opportunities to continue to unlock their fullest potential!
                    </p>
                </div>
                <br />
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
            <br />
            <div className="container"><NewsletterSignup /></div>

        </>
    );
};

export default Alumnae;
