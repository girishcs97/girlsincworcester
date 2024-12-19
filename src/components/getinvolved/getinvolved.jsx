import React from 'react';
import GetInvolvedLogo from '../../images/getinvolved.jpg'
import Support from '../../images/support.png'
import Gift from '../../images/gift.png'
import Diff1 from '../../images/diff1.jpg'
import Dakota from '../../images/dakota.jpg'
import DonationImg from '../../images/donationImage.jpg'
import Diff2 from '../../images/diff2.jpg'

function GetInvolved() {
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">GET INVOLVED</span>
                    <h1 className="fw-bold">
                        <span className="text-danger">Join Girls Inc.</span>in building the new generation of leaders.
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={GetInvolvedLogo}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="text-center" style={{ backgroundColor: '#f8f9fa', padding: '40px' }}>
                <div className="container">
                    {/* Heading Section */}
                    <button className="btn btn-warning text-uppercase mb-3" style={{ fontWeight: 'bold', color: 'black' }}>
                        Make a Difference
                    </button>
                    <h2 className="mb-3">
                        Whether it is through financial contributions, volunteering, advocacy, or many other ways, <span className="text-danger">you can support girls.</span>
                    </h2>
                    <p className="text-muted mb-5">
                        You can help to create a more equitable world where they can break barriers, achieve their goals, and tap into their fullest potential.
                    </p>

                    {/* Card Section */}
                    <div className="row">
                        {/* Card 1 */}
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm border-0">
                                <img src={Diff1} className="card-img-top" alt="Corporate Partner" />
                                <div className="card-body">
                                    <h5 className="card-title">Become A Corporate Partner or Funder</h5>
                                    <p className="card-text">
                                        Are you an organization committed to investing in leaders? Support the evidence-based programming experience proven to help girls succeed.
                                    </p>
                                    <a href="#" className="btn btn-danger">Become A Partner →</a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm border-0">
                                <img src={Diff2} className="card-img-top" alt="Champion for Girls" />
                                <div className="card-body">
                                    <h5 className="card-title">Become A Champion for Girls</h5>
                                    <p className="card-text">
                                        Join the exclusive Champions for Girls philanthropic society of individuals committed to inspiring girls to be strong, smart, and bold.
                                    </p>
                                    <a href="#" className="btn btn-danger">Our Champions →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-lg text-center p-4 mb-4">
                            <div className="mb-3">
                                <img src={Support} alt="Calendar Icon" style={{ height: '50px' }} />
                            </div>
                            <h5 className="font-weight-bold">Support An Event</h5>
                            <p>Celebrate the Girls Inc. Experience</p>
                            <a href="#" className="btn btn-outline-danger">
                                See All Events →
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-lg text-center p-4 mb-4">
                            <div className="mb-3">
                                <img src={Gift} alt="Gift Icon" style={{ height: '50px' }} />
                            </div>
                            <h5 className="font-weight-bold">Make A Gift</h5>
                            <p>Invest in her future</p>
                            <a href="#" className="btn btn-outline-danger">
                                Ways to Give →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-danger text-white p-5 rounded">
                <div className="col-md-6 text-center text-md-start">
                    <button className="btn btn-warning text-uppercase fw-bold mb-3">
                        Make a Donation
                    </button>
                    <h2>
                        <span className="text-warning fw-bold">86¢</span> of every dollar
                        spent
                    </h2>
                    <h3 className="fw-bold">goes directly to programming for girls.</h3>
                    <p className="mt-3 fw-bold">
                        <span className="text-white">An investment in Girls</span> is an
                        investment in an inclusive society where we all win.
                    </p>
                    <button className="btn btn-light fw-bold mt-3">
                        Donate Now <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                </div>
                <div className="col-md-5 mt-4 mt-md-0 position-relative">
                    <div className="">
                        <img
                            src={DonationImg}
                            alt="Girls Inc."
                            className="img-fluid w-50 h-50"
                        />
                    </div>
                </div>
            </div>
            <div className="container my-5 text-center">
                <button className="btn btn-warning text-uppercase fw-bold mb-3 px-4">
                    Other Ways to Get Involved
                </button>
                <h2 className="fw-bold">
                    Be a part of the <span className="text-danger">Girls Inc.</span> community.
                </h2>
                <p className="fw-semibold mt-3 mb-5">
                    <span className="text-dark">There are many ways you can help</span> advance the work of Girls Inc. and help achieve our vision of powerful girls in an equitable society.
                </p>

                <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm h-100 p-4">
                            <div className="text-center mb-3">
                                <i className="bi bi-megaphone-fill fs-1 text-danger"></i>
                            </div>
                            <h5 className="fw-bold">Become An Advocate</h5>
                            <p className="text-muted">
                                Be part of the Girls Inc. movement to drive positive change with and for girls.
                            </p>
                            <a href="#advocate" className="btn btn-outline-danger fw-bold">
                                Advocate Now <span className="ms-1">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm h-100 p-4">
                            <div className="text-center mb-3">
                                <i className="bi bi-people-fill fs-1 text-danger"></i>
                            </div>
                            <h5 className="fw-bold">Become A Volunteer</h5>
                            <p className="text-muted">
                                Volunteers make our work possible.
                            </p>
                            <a href="#volunteer" className="btn btn-outline-danger fw-bold">
                                Become a Volunteer <span className="ms-1">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm h-100 p-4">
                            <div className="text-center mb-3">
                                <i className="bi bi-globe fs-1 text-danger"></i>
                            </div>
                            <h5 className="fw-bold">Become A Social Media Ambassador</h5>
                            <p className="text-muted">
                                Help raise awareness and create a world in which all girls are respected.
                            </p>
                            <a href="#ambassador" className="btn btn-outline-danger fw-bold">
                                Become An Ambassador <span className="ms-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="rounded-circle bg-light p-5 text-center" style={{ maxWidth: '500px', maxHeight: '900px' }}>
                    <p className="fs-4">
                        <span className="text-danger fw-bold" style={{ fontSize: '7rem', marginRight: '0.2rem' }}>“</span>
                        <br />Girls Inc. has helped me grow as a leader in my life, to trust in the process, and believe in myself in everything I do.
                        <span className="text-danger fw-bold" style={{ fontSize: '2rem', marginLeft: '0.2rem' }}></span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <img
                            src={Dakota}
                            alt="Dakota"
                            className="rounded-circle"
                            style={{ width: '50px', height: '50px', marginRight: '0.5rem' }}
                        />
                        <span className="badge bg-warning text-dark fw-bold">Julie</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetInvolved;
