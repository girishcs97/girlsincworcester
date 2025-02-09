import React from "react";
import MakeagiftLogo from '../../images/makeagift.png';
import NewsletterSignup from "../newslettersignup/newslettersignup";

function Makeagift() {
    return (
        <div>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Make A Gift</span>
                    <h1 className="fw-bold">
                        Invest in <span className="text-danger">Her Future</span>
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={MakeagiftLogo}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="text-center p-5 bg-light">
                <h1>
                    When you <span className="text-danger">support Girls Inc.</span>, you
                    are telling a girl that she has someone who believes in her strengths
                    and abilities.
                </h1>
                <p className="mt-3">
                    You are investing in her future. Together, we can increase the number
                    of girls who have the opportunity to develop their inherent
                    strengths, break past barriers to achieve their full potential, and
                    help others, as they were helped along the way.
                </p>
            </div>

            <div className="bg-danger text-white text-center py-5">
                <h2>Ways to Give</h2>
                <h4 className="mt-3">
                    Explore the many ways you can invest in the new generation of leaders.
                </h4>
                <p className="mt-3">
                    No matter how you choose to give, your generosity supports our shared
                    vision of powerful girls in an equitable society.
                </p>

                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card text-center bg-white text-dark p-3">
                                <div className="card-body">
                                    <i className="bi bi-laptop fs-1 text-danger"></i>
                                    <h5 className="card-title mt-3">Give Online</h5>
                                    <p className="card-text">
                                        Donate online to support Girls Inc. of New Hampshire girls
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
                                        Mail your donation to:
                                        <br />
                                        Girls Inc. of New Hampshire
                                        <br />
                                        1711 South Willow Street Unit 5, Manchester, NH 03103
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
        <NewsletterSignup />
        </div>
    );
}

export default Makeagift;
