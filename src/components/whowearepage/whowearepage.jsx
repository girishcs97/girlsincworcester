import React from 'react';
import WhoweareLogo from '../../images/whoweare.jpg';
import './whowearepage.css';
import Annual from '../../images/annual.png';
import Team from '../../images/team.png'
import BillRights from '../../images/billrights.png';
import Champions from '../../images/champions.png';
import History from '../../images/history.png';
import Partners from '../../images/partners.png';
import GetInvolved from './getinvolved';


function WhoweAre() {
    return (
        <>
            <div className="container-fluid bg-light lead">
                <div className="row align-items-center">
                    <div className="col-md-6 py-5">
                        <h5 className="text-uppercase fw-bold text-warning">Who We Are</h5>
                        <br />
                        <br />
                        <h1 className="fw-bold text-danger">Girls Inc.</h1>
                        <span className="lead">
                            is the preeminent girls' leadership organization equipping girls to reach their full potential.
                        </span>
                    </div>
                    <div className="col-md-6 py-5">
                        <img
                            src={WhoweareLogo}
                            alt="Girls Inc."
                            style={{ 'borderRadius': '210px' }}
                            className="img-fluid"
                        />
                    </div>
                </div>
                <br />
                <br />
                <div className="py-5 text-center">
                    <h5 className="text-uppercase fw-bold text-warning">Our Story</h5>
                    <br />
                    <br />
                    <h1 className="fw-bold text-danger">Working with and on behalf of girls for 50 years</h1>
                    <h2 className="fw-bold text-black">
                        has given us unparalleled knowledge and expertise.
                    </h2>
                    <p className="lead mt-3">
                        The Girls Inc. Experience changes the trajectory of girls’ lives and prepares them for lifelong success.
                    </p>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={Team} className="card-img-top" alt="Meet Our Team" />
                            <div className="card-body">
                                <h6 className="text-uppercase text-warning font-weight-bold">Our Leadership</h6>
                                <h5 className="card-title">Meet Our Team</h5>
                                <p className="card-text">
                                    Our dedicated leadership team sets the strategic direction for the organization.
                                </p>
                                <a href="#our-team" className="btn btn-danger">Our Team &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={Annual} className="card-img-top" alt="Annual Reports" />
                            <div className="card-body">
                                <h6 className="text-uppercase text-warning font-weight-bold">Our Financials</h6>
                                <h5 className="card-title">Annual Reports</h5>
                                <p className="card-text">
                                    86¢ of every dollar spent goes directly to supporting girls’ development.
                                </p>
                                <a href="#our-financials" className="btn btn-danger">Our Financials &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={Partners} className="card-img-top" alt="Our Partners" />
                            <div className="card-body">
                                <h6 className="text-uppercase text-warning font-weight-bold">Our Partners</h6>
                                <h5 className="card-title">Our Corporate Partners & Funders</h5>
                                <p className="card-text">
                                    Our partners are committed to increasing access and opportunities for all girls.
                                </p>
                                <a href="#our-team" className="btn btn-danger">Our Partners &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={Champions} className="card-img-top" alt="Champions for Girls" />
                            <div className="card-body">
                                <h6 className="text-uppercase text-warning font-weight-bold">Our Champions</h6>
                                <h5 className="card-title">Champions for Girls</h5>
                                <p className="card-text">
                                    Girls Inc. relies on your investment to provide the new generation of leaders with the support they need to succeed.
                                </p>
                                <a href="#our-financials" className="btn btn-danger">Our Champions &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={History} className="card-img-top" alt="Our History" />
                            <div className="card-body">
                                <h6 className="text-uppercase text-warning font-weight-bold">How It Started</h6>
                                <h5 className="card-title">Our History</h5>
                                <p className="card-text">
                                    We were founded in 1864 to serve girls and young women who were experiencing upheaval in the aftermath of the Civil War.
                                </p>
                                <a href="#our-team" className="btn btn-danger">Our History &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={BillRights} className="card-img-top" alt="Our Bill Of Rights" />
                            <div className="card-body">
                                <h6 className="text-uppercase text-warning font-weight-bold">Bill Of Rights</h6>
                                <h5 className="card-title">Our Bill Of Rights</h5>
                                <p className="card-text">
                                    Girls Inc. is an advocate for girls and honors the Girls Inc. Bill of Rights as part of our continued commitment to making a commitment to making sure they grow up healthy, educated, and independent.
                                </p>
                                <a href="#our-financials" className="btn btn-danger">Our Bill Of Rights &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhoweAre;
