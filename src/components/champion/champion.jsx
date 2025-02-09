import React from "react";
import NewsletterSignup from "../newslettersignup/newslettersignup";
import ChampionsPageLogo from '../../images/championspage.jpg';

function ChampionsForGirls() {
    return (
        <div>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Become a Champion</span>
                    <h1 className="fw-bold">
                        <span className="text-danger">Join</span> the champions for girls giving society
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={ChampionsPageLogo}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            {/* Purpose Section */}
            <div className="text-center p-5 bg-light">
                <h5 className="text-uppercase text-warning">Our Purpose</h5>
                <h1>
                    Girls Inc. <span className="text-danger">Champions for Girls</span> are
                    generous individual philanthropists from across the U.S. and Canada
                    who are dedicated to inspiring girls to be strong, smart, and bold.
                </h1>
                <p className="mt-3">
                    The Champions for Girls community provides invaluable support to Girls
                    Inc., allowing us to achieve our vision of powerful girls in an
                    equitable society. When you join the Champions for Girls Giving
                    Society with a donation of $1,000 or more, you'll have opportunities
                    to engage with Girls Inc. on the issues that matter most to you.
                </p>
                <p>
                    For more information about the Champions for Girls program, contact
                    Aletta Brown, Advancement Manager, at
                    <a href="mailto:abrown@girlsincnh.org" className="text-danger ms-1">
                        abrown@girlsincnh.org
                    </a>
                    .
                </p>
                <div className="mt-4">
                    <a href="#" className="btn btn-danger me-3">
                        Join Today →
                    </a>
                    <a href="#" className="btn btn-outline-danger">
                        Current Champions ↗
                    </a>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-light py-5">
                <div className="text-center">
                    <h5 className="text-uppercase text-warning">Benefits</h5>
                    <h2 className="mt-3">
                        To express our gratitude, and welcome you to our community of
                        Champions, you’ll receive:
                    </h2>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        {/* Left Column: Tiers */}
                        <div className="col-md-4">
                            <div className="list-group">
                                <button className="list-group-item list-group-item-action active bg-danger text-white border-0">
                                    CHAMPION $1,000 – $4,999
                                </button>
                                <button className="list-group-item list-group-item-action">
                                    ALLY $5,000 – $9,999
                                </button>
                                <button className="list-group-item list-group-item-action">
                                    ADVOCATE $10,000 – $24,999
                                </button>
                                <button className="list-group-item list-group-item-action">
                                    LUMINARY $25,000 – $49,999
                                </button>
                                <button className="list-group-item list-group-item-action">
                                    VANGUARD $50,000 +
                                </button>
                                <button className="list-group-item list-group-item-action">
                                    PACESETTER $50,000 +
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Benefits */}
                        <div className="col-md-8">
                            <h4 className="mb-4">
                                With our thanks, we are pleased to offer:
                            </h4>
                            <ul>
                                <li>Invitation to exclusive Champions for Girls event</li>
                                <li>
                                    Exclusive Champions for Girls “Year in Review” or Impact
                                    Report
                                </li>
                                <li>
                                    Recognition on Champions for Girls page (updated annually)
                                </li>
                                <li>Girls Inc. Champions for Girls pin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <NewsletterSignup />
        </div>
    );
}

export default ChampionsForGirls;
