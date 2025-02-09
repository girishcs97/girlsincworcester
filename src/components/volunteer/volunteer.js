import React from 'react';
import Volunteers from '../../images/volunteers.jpeg'
import Volunteer1 from '../../images/volunteer1.jpeg'
import Volunteer2 from '../../images/volunteer2.jpg'
import Volunteer3 from '../../images/volunteer3.jpg'
import NewsletterSignup from '../newslettersignup/newslettersignup';

const Card = ({ imgSrc, title, description, btnText, btnLink }) => {
    return (
        <div className="col-md-4">
            <div className="card shadow-sm rounded mb-4">
                <img src={imgSrc} className="card-img-top rounded-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={btnLink} className="btn btn-danger">
                        {btnText}
                    </a>
                </div>
            </div>
        </div>
    );
};

const Volunteer = () => {

    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">VOLUNTEERS</span>
                    <h1 className="fw-bold">
                        <span className="text-danger">Join us</span> in providing girls with the opportunity to thrive every day..
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={Volunteers}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container text-center my-5">
                <p className="lead">
                    The impact of volunteering at Girls Inc. of New Hampshire extends far beyond immediate interactions;
                    it plants seeds of empowerment, leadership, and resilience that have the potential to shape futures
                    and create lasting change.
                </p>
                <div className="row">
                    <Card
                        imgSrc={Volunteer1}
                        title="Corporate Engagement Opportunities"
                        description="Support us through corporate and community engagement."
                        btnText="Sign Up"
                        btnLink="#"
                    />
                    <Card
                        imgSrc={Volunteer2}
                        title="Become a Volunteer or Intern"
                        description="Working directly with girls in our programs."
                        btnText="Sign Up"
                        btnLink="#"
                    />
                    <Card
                        imgSrc={Volunteer3}
                        title="Event Committees"
                        description="Provide support at our events or join one of our event committees."
                        btnText="Contact Us"
                        btnLink="#"
                    />
                </div>
            </div>
            <NewsletterSignup />
        </>
    )
}
export default Volunteer;