import React from "react";
import NewsletterSignup from "../newslettersignup/newslettersignup";
import ChampionsPageLogo from '../../images/championspage.jpg';

function ChampionsForGirls() {
    return (
        <div>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                        Become a Champion
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        <span className="text-danger">Join</span> the champions for girls giving society
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={ChampionsPageLogo}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            {/* Purpose Section */}
            <div className="text-center p-5 bg-light">
                <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                    Our Purpose
                </span>
                <br />
                <br />
                <h2 className="fw-bold">
                    Girls Inc. <span className="text-danger">Champions for Girls</span> are
                    generous individual <br />philanthropists from across the U.S. and Canada
                    who are<br /> dedicated to inspiring girls to be strong, smart, and bold.
                </h2>
                <p className="mt-3">
                    The Champions for Girls community provides invaluable support to Girls
                    Inc., allowing us to achieve our vision of powerful <br />girls in an
                    equitable society. When you join the Champions for Girls Giving
                    Society with a donation of $1,000 or more, you'll <br />have opportunities
                    to engage with Girls Inc. on the issues that matter most to you.
                </p>
                <br />
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
                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                        Benefits
                    </span>
                    <h2 className="mt-3 fw-bold">
                        To express our gratitude, and welcome you to our community of<br />
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
                            <h4 className="mb-4 fw-bold">
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
            <div className="container"><NewsletterSignup /></div>
        </div>
    );
}

export default ChampionsForGirls;
