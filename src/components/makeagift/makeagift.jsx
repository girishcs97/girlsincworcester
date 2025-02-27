import React from "react";
import MakeagiftLogo from '../../images/makeagift.png';
import NewsletterSignup from "../newslettersignup/newslettersignup";

function Makeagift() {
    return (
        <div>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                        Make A Gift
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        Invest in <span className="text-danger">Her Future</span>
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={MakeagiftLogo}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="text-center p-5 bg-light">
                <h2 className="fw-bold">
                    When you <span className="text-danger">support Girls Inc.</span>, you
                    are telling a girl that she has <br />someone who believes in her strengths
                    and abilities.
                </h2>
                <p className="mt-3">
                    You are investing in her future. Together, we can increase the number
                    of girls who have the opportunity to develop their <br />inherent
                    strengths, break past barriers to achieve their full potential, and
                    help others, as they were helped along the way.
                </p>
            </div>

            <div className="bg-danger text-white text-center py-5">
                <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                    Ways to give
                </span>
                <h3 className="mt-3 fw-bold">
                    Explore the many ways you can invest in the new generation of leaders.
                </h3>
                <p className="mt-3">
                    No matter how you choose to give, your generosity supports our shared
                    vision of powerful girls in an equitable society.
                </p>
                <br />
                <br />
                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card text-center bg-white text-dark p-3">
                                <div className="card-body">
                                    <i className="bi bi-laptop fs-1 text-danger"></i>
                                    <h5 className="card-title mt-3">Give Online</h5>
                                    <p className="card-text">
                                        Donate online to support Girls Inc. of Worcester girls
                                        today.
                                    </p>
                                    <a href="#" className="btn btn-danger">
                                        Donate Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center bg-white text-dark p-3">
                                <div className="card-body">
                                    <i className="bi bi-envelope fs-1 text-danger"></i>
                                    <h5 className="card-title mt-3">Give by Mail</h5>
                                    <p className="card-text">
                                        Mail your donation at:
                                        <br />
                                        125 Providence St, Worcester, MA 01604
                                    </p>
                                    <a href="#" className="btn btn-danger">
                                        Download the Form
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center bg-white text-dark p-3">
                                <div className="card-body">
                                    <i className="bi bi-telephone fs-1 text-danger"></i>
                                    <h5 className="card-title mt-3">Give by Phone</h5>
                                    <p className="card-text">
                                        For assistance via phone, contact the Fund Development team
                                        at (603) 606-1705.
                                    </p>
                                    <a href="tel:6036061705" className="btn btn-danger">
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center bg-white text-dark p-3">
                                <div className="card-body">
                                    <i className="bi bi-file-earmark-text fs-1 text-danger"></i>
                                    <h5 className="card-title mt-3">Make a Stock Gift</h5>
                                    <p className="card-text">
                                        To donate via stock, please fill out the Stock Gift Form.
                                    </p>
                                    <a href="#" className="btn btn-danger">
                                        Download the Form
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center bg-white text-dark p-3">
                                <div className="card-body">
                                    <i className="bi bi-chat-square-text fs-1 text-danger"></i>
                                    <h5 className="card-title mt-3">Contact Us</h5>
                                    <p className="card-text">
                                        For additional assistance, contact the Fund Development
                                        team at:
                                        <br />
                                        info@girlsincnh.org
                                        <br />
                                        (603) 606-1705
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container"><NewsletterSignup /></div>
        </div>
    );
}

export default Makeagift;
