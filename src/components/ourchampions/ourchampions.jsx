import React from 'react';
import Champions from '../../images/champions.png'

const OurChampions = () => {
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2 text-uppercase">Become a Champion</span>
                    <h1 className="fw-bold">
                    Learn About Our<span className="text-danger"> Champions for Girls</span> Community
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={Champions}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container">
                {/* Purpose Section */}
                <section className="text-center py-5">
                    <div className="mb-4">
                        <span className="badge bg-warning text-dark px-3 py-2">OUR PURPOSE</span>
                    </div>

                    <h1 className="mb-4">
                        Join the <span className="text-danger">Champion for Girls Giving Society</span> today for the opportunity to engage with Girls Inc. on the issues that matter most to you.
                    </h1>

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <p className="mb-4">
                                Susie Buffet has been a lifetime advocate for girls' rights and opportunities, and for young people growing up in difficult circumstances. Her impact is tremendous and lasting, her imprint indelible. In her commitment to creating an equitable future for girls, she has been a philanthropic leader and deeply involved with Girls Inc. National and the local Omaha, NE Affiliate for decades. To honor her legacy, the Girls Inc. is proud to name her the Girls Inc. Lifetime Champion for Girls.
                            </p>
                        </div>
                    </div>

                    <button className="btn btn-danger px-4 py-2">
                        Become A Champion <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                </section>

                {/* Champions Section */}
                <section className="text-center py-5 bg-light">
                    <div className="mb-4">
                        <span className="badge bg-warning text-dark px-3 py-2">OUR CHAMPIONS</span>
                    </div>

                    <h2 className="mb-5">
                        Our Champions for Girls are committed to uplifting the incredible potential and promise of girls.
                    </h2>

                    <div className="row justify-content-center g-3">
                        <div className="col-md-3">
                            <div className="bg-danger text-white p-3 rounded">
                                <h3>PACESETTER</h3>
                                <p className="mb-0">$100,000+</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="border border-danger p-3 rounded">
                                <h3>VANGUARD</h3>
                                <p className="mb-0">$50,000-$99,999</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="border border-danger p-3 rounded">
                                <h3>LUMINARY</h3>
                                <p className="mb-0">$25,000-$49,999</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="border border-danger p-3 rounded">
                                <h3>ADVOCATE</h3>
                                <p className="mb-0">$10,000-$24,999</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="mb-0">Burkehaven Family Foundation</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OurChampions;