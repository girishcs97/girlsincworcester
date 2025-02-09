import React from "react";
import PartnersInc from '../../images/partnersinc.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";
import Jaihliani from '../../images/jaihliani.jpg'

function PartnershipPage() {
    return (
        <div>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Girls Inc. PARTNERS</span>
                    <h1 className="fw-bold">
                        Invest in Girls Inc. and support the <span className="text-danger">new generation </span> of leaders.
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={PartnersInc}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            {/* Investing in the Future Section */}
            <div className="text-center p-5 bg-light">
                <h5 className="text-uppercase text-warning">Investing in a More Equitable Future</h5>
                <h1 className="mt-3">
                    We invite you to become a partner and help our organization provide
                    girls with the tools they need to be strong, smart, and bold in
                    anything they set their minds to.
                </h1>
                <p className="mt-3">
                    Girls Inc. relies on external funding to support training, curriculum,
                    and programming that help girls build the knowledge, skills, and
                    confidence to be leaders and change the world.
                </p>
                <div className="mt-4">
                    <a href="#" className="btn btn-danger">
                        Join Us ↗
                    </a>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-light py-5">
                <div className="text-center">
                    <h5 className="text-uppercase text-warning">Benefits</h5>
                    <h2 className="mt-3">
                        In gratitude for your support, Girls Inc. offers these benefits,
                        among other customizations for your campaign:
                    </h2>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-4 shadow">
                                <h5 className="text-danger">Executive Partner</h5>
                                <h4>$20,000</h4>
                                <p>
                                    Company logo on two Girls Inc. buses, premiere event
                                    sponsorships, sponsor plaques at both centers.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-4 shadow">
                                <h5 className="text-danger">Custom Partner</h5>
                                <h4>$15,000</h4>
                                <p>
                                    Customized soundproofing panel in Nashua gym, sponsorship of
                                    athletic programs for one year, online profile, event
                                    sponsorships.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-4 shadow">
                                <h5 className="text-danger">Advocate Partner</h5>
                                <h4>$10,000</h4>
                                <p>
                                    Soundproof panel with logo, Summer Camp T-shirt sponsor to
                                    include company logo, event sponsorship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Partners Section */}
            <div className="text-center p-5 bg-light">
                <h5 className="text-uppercase text-warning">Our Partners</h5>
                <h2 className="mt-3">
                    Our funders are committed to increasing the access and opportunities
                    for all girls.
                </h2>
                <div className="mt-4">
                    <a href="#" className="btn btn-danger me-3">
                        Our Partners ↗
                    </a>
                    <a href="#" className="btn btn-outline-danger">
                        Make a Gift ↗
                    </a>
                </div>
            </div>

            {/* Impact Stories Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="card p-4 shadow">
                                <h5 className="text-uppercase text-warning">Impact Stories</h5>
                                <h2 className="mt-3">Meet Jaihlani.</h2>
                                <p className="mt-3">
                                    Jaihlani reflects on the impact Girls Inc. made in her
                                    personal development and her future goals.
                                </p>
                                <a href="#" className="btn btn-danger mt-3">
                                    Read Full Story →
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={Jaihliani}
                                alt="Jaihlani speaking"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <NewsletterSignup />
        </div>
    );
}

export default PartnershipPage;
