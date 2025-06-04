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
    const statisticsData = [
        {
            title: 'Corporate Engagement Opportunities',
            description: 'Support us through corporate and community engagement.',
            image: Volunteer1,
            link: '#',
            buttonText: 'Sign Up',
            buttonIcon: 'bi bi-box-arrow-up-right'
        },
        {
            title: 'Become a Volunteer or Intern',
            description: 'Working directly with girls in our programs of girlsinWorcester.',
            image: Volunteer2,
            link: 'https://forms.office.com/pages/responsepage.aspx?id=i6I1BPSV5EGbAt1Vlgee8Efk4oNHc9lArwLV1OccOqNURFRMS0dWQU85MFM2OVdLMTFDU1RYMzBDMy4u&route=shorturl',
            buttonText: 'Sign Up',
            buttonIcon: 'bi bi-box-arrow-up-right'
        },
        {
            title: 'Event Committees',
            description: 'Provide support at our events or join one of our event committees.',
            image: Volunteer3,
            link: '#',
            buttonText: 'Contact Us',
            buttonIcon: 'bi bi-envelope'
        }
    ];

    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                        VOLUNTEERS
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        <span className="text-danger">Join us</span> in providing girls with the opportunity to thrive every day..
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={Volunteers}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="container text-center my-5">
                <p className="lead fw-bold">
                    The impact of volunteering at Girls Inc. of New Hampshire extends far beyond immediate interactions;
                    it plants seeds of <br />empowerment, leadership, and resilience that have the potential to shape futures
                    and create lasting change.
                </p>
                <br />
                <div className="container my-5">
                    <div className="row justify-content-center">
                        {statisticsData.map((card, index) => (
                            <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
                                <div className="card shadow-sm h-100 text-center" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                    <img src={card.image} className="card-img-top" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', height: '200px', objectFit: 'cover' }} alt={card.title} />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title fw-bold">{card.title}</h5>
                                        <br/>
                                        <p className="card-text">{card.description}</p>
                                        <br/>
                                        <a href={card.link} className="btn btn-outline-danger rounded-pill mt-3">
                                            {card.buttonText} <i className={card.buttonIcon}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='container'><NewsletterSignup /></div>

        </>
    )
}
export default Volunteer;