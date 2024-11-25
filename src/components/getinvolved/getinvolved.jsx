import React from 'react';
import GetInvolvedLogo from '../../images/getinvolved.jpg'
import Support from '../../images/support.png'
import Gift from '../../images/gift.png'
import Diff1 from '../../images/diff1.jpg'
import Diff2 from '../../images/diff2.jpg'

function GetInvolved() {
    return (
        <>
            <div className="d-flex align-items-center" style={{ backgroundColor: '#f8f9fa', padding: '40px' }}>
                <div className="container d-flex justify-content-between">
                    {/* Text Section */}
                    <div className="text-start">
                        <button className="btn btn-warning text-uppercase mb-3" style={{ fontWeight: 'bold', color: 'black' }}>
                            Get Involved
                        </button>
                        <h1 className="text-danger">
                            Join Girls Inc. in building the new generation of leaders.
                        </h1>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img
                            src={GetInvolvedLogo}
                            alt="Girls Inc"
                            className="img-fluid rounded-circle"
                            style={{ width: '350px', height: 'auto' }}
                        />
                    </div>
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
                                <img src={Diff1}className="card-img-top" alt="Corporate Partner" />
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
                                <img src={Gift}alt="Gift Icon" style={{ height: '50px' }} />
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
        </>
    );
}

export default GetInvolved;
