import React from 'react';
import BillLogo from '../../images/billrightslogo.jpg';
import Bill1 from '../../images/bill1.jpg'
import Bill2 from '../../images/bill2.jpg'
import Bill3 from '../../images/bill3.jpg'
import Bill4 from '../../images/bill4.jpg'
import Bill5 from '../../images/bill5.png'
import Bill6 from '../../images/bill6.jpg'
import BillHistory from '../../images/billpurpose.jpg'
import Dakota from '../../images/dakota.jpg'
import './ourbillofrights.css';
import NewsletterSignup from '../newslettersignup/newslettersignup';

const OurBillofRights = () => {
    const rights = [
        {
            id: 1,
            label: "ONE",
            title: "Girls have the right to be themselves and to resist stereotypes.",
            image: Bill1
        },
        {
            id: 2,
            label: "TWO",
            title: "Girls have the right to express themselves with originality and enthusiasm.",
            image: Bill2
        },
        {
            id: 3,
            label: "THREE",
            title: "Girls have the right to take risks, to strive freely, and to take pride in success.",
            image: Bill3
        },
        {
            id: 4,
            label: "FOUR",
            title: "Girls have the right to accept and appreciate their bodies.",
            image: Bill4
        },
        {
            id: 5,
            label: "FIVE",
            title: "Girls have the right to have confidence in themselves and to be safe in the world.",
            image: Bill5
        },
        {
            id: 6,
            label: "SIX",
            title: "Girls have the right to prepare for interesting work and economic independence.",
            image: Bill6
        }
    ];
    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }}>
                        Girls Inc. Girls’ Bill of Rights
                    </span>
                    <p className="mt-4 fw-bold" style={{ fontSize: '42px' }}>
                        When girls are <span className="text-danger">recognized and <br/>respected,</span> they thrive. 
                    </p>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={BillLogo}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="container py-5">
                {/* Who We Serve Section */}
                <section className="text-center mb-5">
                    <div className="d-inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#eeff41" }}>
                        <span className="text-uppercase fw-bold">Who We Serve</span>
                    </div>
                    <h4 className="mb-4 fs-1 fw-bold">
                    Through the <span className="text-danger">Girls Inc. Experience,</span> we cultivate an <br></br>environment that is pro-girl, where she is encouraged to be <br/>her authentic self and is able to develop the skills that help <br/>her reach her full potential.
                    </h4>
                </section>

                {/* Our Purpose Section */}
                <section className="container py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between bg-white">
                    {/* Text Section */}
                    <div className="col-lg-8 text-center text-lg-start">
                        <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }}>
                            OUR PURPOSE
                        </span>
                        <h1 className="mt-4 display-5 fw-bold">
                            All About the <span className="text-danger">Girls.</span>
                        </h1>
                        <p>
                            <span className="fw-bold">Although the times and programs have changed,</span>
                            Girls Inc. <br />always has been, and always will be, all about the girls.
                            With a <br />continued commitment and dedication to making a lasting <br />difference,
                            Girls Inc. is a strong advocate for girls and honors <br />the Girls Inc. Bill of Rights.
                        </p>
                        <a className="btn btn-danger px-4 py-2 fw-bold" href='https://live-grla-newhampshireorg.pantheonsite.io/wp-content/uploads/2024/02/Copy-of-Copy-of-Girls-Inc.-Bill-of-Rights.pdf' target='_blank'>
                            Download the Bill of Rights PDF →
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-4 d-flex justify-content-center position-relative">
                        <img
                            src={BillHistory}
                            alt="Girls Inc"
                            className="rounded-circle img-fluid"
                            style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </section>

                {/* Rights Grid Section */}
                <div className="row g-4">
                    {rights.map((right) => (
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm hover-zoom">
                                <img src={right.image} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} alt={right.label} />
                                <div className="card-body">
                                <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }}>{right.label}</span>
                                <br/>
                    <br/>
                                    <p className="card-text text-dark fw-bold">{right.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="quote-section d-flex justify-content-center align-items-center">
                <div className="quote-section d-flex justify-content-center align-items-center">
                    <div className="quote-card text-center">
                        <span className="quote-icon">&#8220;</span>
                        <p className="quote-text">Strong Smart & Bold means no matter if you fail, you stay strong and try again.</p>
                        <div className="quote-author d-flex align-items-center justify-content-center">
                            <img src={Dakota} className="author-img rounded-circle" alt="Raquel" />
                            <span className="author-name text-warning">RAQUEL</span>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='container'><NewsletterSignup /></div>
            
        </>

    )
}
export default OurBillofRights