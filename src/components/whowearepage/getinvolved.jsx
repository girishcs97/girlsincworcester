import React from 'react';
import './whowearepage.css';
import Partner from '../../images/partner.png';
import Volunteer from '../../images/volunteer.png';
import Advocate from '../../images/advocate.png';
import Ambassador from '../../images/social-ambassador.png';
import NewsletterSignup from '../newslettersignup/newslettersignup';

const GetInvolved = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center text-center text-white py-5" style={{ backgroundColor: '#ED1849' }}>
                {/* Header Label */}
                <span className="badge text-dark px-3 py-1" style={{backgroundColor:"#eeff41"}}>
                        GET INVOLVED
                    </span>
                <br/>
                {/* Main Text */}
                <h2 className="fw-bold">
                    <span style={{color:'#eeff41'}}>Stand with girls.</span> Your generosity shows
                    girls you believe in them and their potential.
                </h2>
                <br />
                {/* Button */}
                <a href="#" className="btn btn-light rounded-pill px-4">
                    Get Involved →
                </a>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    {/* Corporate Partner or Funder Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-lg p-4" style={{ maxWidth: "400px", borderRadius: "15px" }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <img src={Partner} alt="Partner Icon" className="img-fluid" />
                                </div>
                                <h5 className="card-title fw-bold">Become A Corporate Partner or Funder</h5>
                                <p className="card-text text-muted">
                                    Make a difference by creating pathways to lifelong success.
                                </p>
                                <a href="#" className="btn btn-outline-danger rounded-pill px-4">
                                    Become A Partner →
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                    {/* Volunteer Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-lg p-4" style={{ maxWidth: "400px", borderRadius: "15px" }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <img src={Volunteer} alt="Volunteer Icon" className="img-fluid" />
                                </div>
                                <h5 className="card-title fw-bold">Become A Volunteer</h5>
                                <p className="card-text text-muted">
                                    oin us in providing girls with the opportunity to thrive every day.
                                </p>
                                <a href="#" className="btn btn-outline-danger rounded-pill px-4">
                                    Become A Volunteer →
                                </a>
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    {/* Corporate Partner or Funder Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-lg p-4" style={{ maxWidth: "400px", borderRadius: "15px" }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <img src={Advocate} alt="Partner Icon" className="img-fluid" />
                                </div>
                                <h5 className="card-title fw-bold">Become A Advocate</h5>
                                <p className="card-text text-muted">
                                    Be part of the Girls Inc. movement to effect positive change with and for girls.
                                </p>
                                <a href="#" className="btn btn-outline-danger rounded-pill px-4">
                                    Become A Advocate →
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mb-4">
                    </div>

                    {/* Volunteer Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-lg p-4" style={{ maxWidth: "400px", borderRadius: "15px" }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <img src={Ambassador} alt="Volunteer Icon" className="img-fluid" />
                                </div>
                                <h5 className="card-title fw-bold">Become A Social Ambassador</h5>
                                <p className="card-text text-muted">
                                    Help raise awareness and create a world in which all girls are valued and respected.
                                </p>
                                <a href="#" className="btn btn-outline-danger rounded-pill px-4">
                                    Become A Ambassador →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <NewsletterSignup />
            </div>
        </>
    )
}
export default GetInvolved