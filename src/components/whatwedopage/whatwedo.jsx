import React from 'react';
import WhatwedoImg from '../../images/whatwedo.jpg';
import Advocacy from '../../images/advocacy.jpg';
import Diff1 from '../../images/Difference1.png';
import Diff2 from '../../images/Difference2.png';
import Diff3 from '../../images/Difference3.png';
import National from '../../images/national.jpg';
import Learn1 from '../../images/learn1.png';
import Learn2 from '../../images/learn2.jpg';
import Learn3 from '../../images/learn3.jpg';
import GetInvolved from '../whowearepage/getinvolved';

function Whatwedo() {
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex flex-column flex-lg-row align-items-center">
                <div className="text-section col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="badge bg-warning text-dark mb-3">WHAT WE DO</div>
                    <h1 className="display-5 fw-bold">
                        Mentorship, a pro-girl environment, and proven programs{" "}
                        <span className="text-danger">prepare girls</span> for independent
                        life.
                    </h1>
                </div>
                <div className="image-section col-lg-6 d-flex justify-content-center">
                    <img
                        src={WhatwedoImg}
                        alt="Group of girls smiling"
                        className="img-fluid rounded"
                        style={{ maxWidth: "80%" }}
                    />
                </div>
            </div>
            <div className="container my-5 text-center">
                <div className="badge bg-warning text-dark mb-4">OUR MISSION</div>

                <div className="mb-5">
                    <h2 className="fw-bold">
                        Our <span className="text-danger">Mission</span>
                    </h2>
                    <p className="fs-5">Girls Inc. inspires all girls to be strong, smart, and bold.</p>
                </div>

                <div className="mb-5">
                    <h2 className="fw-bold">
                        Our <span className="text-danger">Vision</span>
                    </h2>
                    <p className="fs-5">Powerful girls in an equitable society.</p>
                </div>

                <div>
                    <h2 className="fw-bold">
                        Our <span className="text-danger">Values</span>
                    </h2>
                    <ul className="list-unstyled fs-5">
                        <li>Respect the dignity of each human being.</li>
                        <li>Recognize and support the strength in every girl.</li>
                        <li>Appreciate, embrace, and advance diversity.</li>
                        <li>Drive for results anchored in accountability.</li>
                        <li>Operate collaboratively.</li>
                    </ul>
                </div>
            </div>
            <section className="py-5 text-center" style={{ backgroundColor: '#e9195f' }}>
                <div className="container">
                    <h2 className="text-white fw-bold mb-4">Our Difference</h2>
                    <p className="text-white fw-bold mb-5" style={{ fontSize: '1.5rem' }}>
                        Through the <span style={{ color: '#ffe600' }}>Girls Inc. Experience</span>, our professionally trained staff and volunteers provide mentorship, safe spaces, and programming that address the unique challenges girls face and are proven to help girls succeed.
                    </p>
                    <p className="text-white mb-5">
                        We cultivate safe environments where girls are encouraged to take risks, learn from experiences, and grow.
                    </p>

                    <div className="row g-4">
                        <div className='col-md-1'></div>
                        <div className="col-md-3 d-flex">
                            <div className="card border-0 shadow flex-fill">
                                <img
                                    src={Diff1}
                                    className="card-img-top"
                                    alt="Pro-Girl"
                                />
                                <div className="card-body text-center">
                                    <div className="badge bg-warning text-dark mb-3">Pro-Girl</div>
                                    <p className="card-text">
                                        We cultivate a pro-girl environment that encourages girls to be their authentic selves.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="card border-0 shadow flex-fill">
                                <img
                                    src={Diff2}
                                    className="card-img-top"
                                    alt="Evidence-Based"
                                />
                                <div className="card-body text-center">
                                    <div className="badge bg-warning text-dark mb-3">Evidence-based</div>
                                    <p className="card-text">
                                        The Girls Inc. Experience has positive and lasting effects for the girls who participate.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="card border-0 shadow flex-fill">
                                <img
                                    src={Diff3}
                                    className="card-img-top"
                                    alt="Comprehensive"
                                />
                                <div className="card-body text-center">
                                    <div className="badge bg-warning text-dark mb-3">Comprehensive</div>
                                    <p className="card-text">
                                        Girls are equipped with the skills to effect positive changes in their lives and to become leaders who will change the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </section>
            <div className="container my-5 d-flex flex-column flex-lg-row align-items-center">
                <div className="text-section col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="badge bg-warning text-dark mb-3">ADVOCACY & EDUCATION</div>
                    <h1 className="fw-bold">
                        Girls Inc. works with and for girls to advocate for policies to overcome
                        the social and systemic barriers that threaten their ability to succeed.
                    </h1>
                    <p className="mt-3">
                        <span className='fw-bold'>Together, we advocate especially for the needs of girls</span> from low-income
                        communities and those who may face discrimination because of their gender,
                        race, religion, ethnicity, immigration status, disability, socioeconomic
                        status, sexual orientation, and gender identity.
                    </p>
                    <button className="btn btn-danger btn-lg mt-4">
                        Learn About our Advocacy →
                    </button>
                </div>
                <div className="image-section col-lg-6 d-flex justify-content-center">
                    <img
                        src={Advocacy}
                        alt="Girls advocating in front of the Capitol building"
                        className="img-fluid rounded-circle border border-warning"
                        style={{ maxWidth: "70%" }}
                    />
                </div>
            </div>
            <section className="py-5 text-center" style={{ backgroundColor: '#e9195f' }}>
                <div className="container">
                    {/* Section Title */}
                    <div className="mb-5">
                        <div className="badge bg-warning text-dark mb-3">What Girls Learn</div>
                        <p className="text-white fw-bold" style={{ fontSize: '1.5rem' }}>
                            Girls build the <span style={{ color: '#ffe600' }}>knowledge</span>, skills, and confidence to push for positive change in their lives and their communities.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="row g-4">
                        {/* Card 1 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100" style={{ borderRadius: '15px', backgroundColor: 'white' }}>
                                <div className="card-body text-center py-4">
                                    <h6 className="fw-bold text-danger text-uppercase">Strong & Healthy</h6>
                                    <h1 className="fw-bold" style={{ color: '#e9195f', fontSize: '3rem' }}>91%</h1>
                                    <p>Of girls say they would know what to do if a friend was feeling sad, stressed, or depressed.</p>
                                    <div className="mt-3">
                                        <img
                                            src={Learn1}
                                            alt="Stat 1"
                                            className="rounded-circle img-fluid"
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        />
                                        <span className="text-danger fs-4 fw-bold">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100" style={{ borderRadius: '15px', backgroundColor: 'white' }}>
                                <div className="card-body text-center py-4">
                                    <h6 className="fw-bold text-warning text-uppercase">Smart & Educated</h6>
                                    <h1 className="fw-bold" style={{ color: '#e9195f', fontSize: '3rem' }}>90%</h1>
                                    <p>Of girls are confident they will graduate college.</p>
                                    <div className="mt-3">
                                        <img
                                            src={Learn2}
                                            alt="Stat 2"
                                            className="rounded-circle img-fluid"
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        />
                                        <span className="text-danger fs-4 fw-bold">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow h-100" style={{ borderRadius: '15px', backgroundColor: 'white' }}>
                                <div className="card-body text-center py-4">
                                    <h6 className="fw-bold text-success text-uppercase">Bold & Independent</h6>
                                    <h1 className="fw-bold" style={{ color: '#e9195f', fontSize: '3rem' }}>87%</h1>
                                    <p>Of girls believe it's important to be an active and informed citizen.</p>
                                    <div className="mt-3">
                                        <img
                                            src={Learn3}
                                            alt="Stat 3"
                                            className="rounded-circle img-fluid"
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        />
                                        <span className="text-danger fs-4 fw-bold">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="row mt-5 align-items-center">
                        <div className="col-md-6 text-start text-md-center">
                            <h6 className="text-uppercase text-warning fw-bold" style={{ fontSize: '0.9rem' }}>
                                Role of Girls Inc. National
                            </h6>
                            <p className="text-white fw-bold mb-4">
                                Providing thought leadership and resources to our network of <span className="text-warning fw-bold">75 Girls Inc. Affiliates</span> across the US and Canada.
                            </p>
                            <p className="text-white">
                                Local Affiliate partnerships enhance goals and provide strategic direction for over 100,000 girls.
                            </p>
                            <a href="#" className="btn btn-warning text-uppercase fw-bold" style={{ borderRadius: '30px' }}>
                                Learn More About National →
                            </a>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src={National}
                                alt="Girls Inc"
                                className="rounded-circle img-fluid"
                                style={{ maxWidth: '300px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <GetInvolved />
        </>
    );
}

export default Whatwedo;