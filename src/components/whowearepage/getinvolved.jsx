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
            <div className="d-flex flex-column align-items-center text-center bg-danger text-white py-5">
                {/* Header Label */}
                <h6 className="text-uppercase text-warning font-weight-bold mb-2">Get Involved</h6>

                {/* Main Text */}
                <h2 className="font-weight-bold">
                    <span className="text-warning">Stand with girls.</span> Your generosity shows
                    girls you believe in them and their potential.
                </h2>

                {/* Button */}
                <a href="#get-involved" className="btn btn-light text-danger font-weight-bold mt-4">
                    Get Involved &rarr;
                </a>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    {/* Corporate Partner or Funder Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card-gi h-100 shadow-sm text-center p-4 rounded-4">
                            <div className="card-body-gi">
                                {/* Icon */}
                                <div className="mb-3">
                                    <img src={Partner} alt="Partner Icon" className="img-fluid" />
                                </div>
                                {/* Title */}
                                <h5 className="card-title font-weight-bold">Become A Corporate Partner or Funder</h5>
                                {/* Description */}
                                <p className="card-text">Make a difference by creating pathways to lifelong success.</p>
                                {/* Button */}
                                <br />
                                <br />
                                <a href="#partner" className="btn btn-outline-danger rounded-pill">
                                    Become A Partner &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mb-4">
                    </div>
                    {/* Volunteer Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card-gi h-100 shadow-sm text-center p-4 rounded-4">
                            <div className="card-body-gi">
                                {/* Icon */}
                                <div className="mb-3">
                                    <img src={Volunteer} alt="Volunteer Icon" className="img-fluid" />
                                </div>
                                {/* Title */}
                                <h5 className="card-title font-weight-bold">Become A Volunteer</h5>
                                {/* Description */}
                                <p className="card-text">Join us in providing girls with the opportunity to thrive every day.</p>
                                {/* Button */}
                                <br />
                                <br />
                                <a href="#volunteer" className="btn btn-outline-danger rounded-pill">
                                    Become A Volunteer &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    {/* Corporate Partner or Funder Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card-gi h-100 shadow-sm text-center p-4 rounded-4">
                            <div className="card-body-gi">
                                {/* Icon */}
                                <div className="mb-3">
                                    <img src={Advocate} alt="Partner Icon" className="img-fluid" />
                                </div>
                                {/* Title */}
                                <h5 className="card-title font-weight-bold">Become an Avocate</h5>
                                {/* Description */}
                                <p className="card-text">Be part of the Girls Inc. movement to effect positive change with and for girls.</p>
                                {/* Button */}
                                <br />
                                <br />
                                <a href="#partner" className="btn btn-outline-danger rounded-pill">
                                    Become An Avocate &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mb-4">
                    </div>
                    {/* Volunteer Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card-gi h-100 shadow-sm text-center p-4 rounded-4">
                            <div className="card-body-gi">
                                {/* Icon */}
                                <div className="mb-3">
                                    <img src={Ambassador} alt="Volunteer Icon" className="img-fluid" />
                                </div>
                                {/* Title */}
                                <h5 className="card-title font-weight-bold">Become A Social Ambassador</h5>
                                {/* Description */}
                                <p className="card-text">Help raise awareness and create a world in which all girls are valued and respected.</p>
                                {/* Button */}
                                <br />
                                <br />
                                <a href="#volunteer" className="btn btn-outline-danger rounded-pill">
                                    Become An Ambassador &rarr;
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