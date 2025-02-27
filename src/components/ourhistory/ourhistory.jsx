import React from 'react';
import History from '../../images/history.jpg'
import History1 from '../../images/history1.jpg'
import History2 from '../../images/history2.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import HistoryBg from '../../images/history-bg.png'
import './ourhistory.css'
import NewsletterSignup from '../newslettersignup/newslettersignup';

const OurHistory = () => {

    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                        OUR HISTORY
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        Girls Inc. is the <span className="text-danger">longest-running girls’</span> leadership organization.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={History}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <Container className="text-center my-5">
                <Row>
                    <Col>
                        <h2 className='fw-bold'>Our <span className="text-danger">Mission</span></h2>
                        <p className='fw-bold'>Girls Inc. inspires all girls to be strong, smart, and bold.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h2 className='fw-bold'>Our <span className="text-danger">Vision</span></h2>
                        <p className='fw-bold'>Powerful girls in an equitable society.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h2 className='fw-bold'>Our <span className="text-danger">Values</span></h2>
                        <ul className="list-unstyled fw-bold" >
                            <li>Respect the dignity of each human being.</li>
                            <li>Recognize and support the strength in every girl.</li>
                            <li>Appreciate, embrace, and advance diversity.</li>
                            <li>Drive for results anchored in accountability.</li>
                            <li>Operate collaboratively.</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h3 className="fw-bold">
                            Girls Inc. was <span className="text-danger">founded in 1864</span> to serve girls and young <br />women
                            who were experiencing upheaval in the aftermath <br />of the Civil War.
                        </h3>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <p className=''>
                            Across the decades, we adapted to meet the specific environmental challenges facing girls and young women,
                            always<br /> working in partnership with schools and communities, and guided by our founders’ fundamental belief
                            in the inherent <br />potential of each girl. Woven into those early girls’ clubs are the same core values of
                            Girls Inc. today: the importance of <br />creating a safe gathering place for girls to learn and to share in a
                            sisterhood and a strong premise that each girl can develop<br /> her own capacities, self-confidence, and grow up
                            healthy, educated, and independent.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                {/* First Section */}
                <Row className="align-items-center mb-5">
                    <Col md={6} className="text-center">
                        <h2 className='fw-bold'>
                            For <span className="text-danger">160 years</span>, Girls Inc. has been evolving with girls.
                        </h2>
                        <p>
                            We not only support girls, we also equip them and give them the opportunity to envision, and then create, a
                            more equitable future.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={History1}
                            alt="Girls Inc"
                            className="rounded-circle img-fluid"
                            style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover"
                            }}
                        />
                    </Col>
                </Row>

                {/* Second Section */}
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <img
                            src={History2}
                            alt="Girls Inc"
                            className="rounded-circle img-fluid"
                            style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover"
                            }}
                        />

                    </Col>
                    <Col md={6} className="text-center">
                        <h2 className='fw-bold'>
                            Girls Inc. of Worcester celebrates <span className="text-danger">50 years</span> this year.
                        </h2>
                        <p>
                            We’ve served thousands of New Hampshire girls over this span of time. What we’ve learned is that girls are
                            innately powerful, and they are the strong, smart, and bold leaders our communities need.
                        </p>
                    </Col>
                </Row>

                {/* Third Section - Callout */}
                <div className="position-relative d-flex justify-content-center align-items-center"
                    style={{
                        minHeight: '100vh'
                    }}
                >
                    <img src={HistoryBg} alt="Background" className="position-absolute w-100 h-100" style={{ objectFit: 'cover', zIndex: '-1' }} />
                    <div className="card p-4 text-start" style={{ maxWidth: '400px', background: 'white', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <span className="badge text-dark mb-2" style={{ backgroundColor: "#eeff41" }}>GIRLS’ BILL OF RIGHTS</span>
                        <br/>
                        <p className="text-dark">
                            We will always support girls and ensure that their rights are recognized and respected.
                        </p>
                        <button className="btn btn-pink mt-3" style={{ backgroundColor: '#ed1849', color: 'white', borderRadius: '25px' }}>
                            Our Bill of Rights ➔
                        </button>
                    </div>
                </div>
            </Container>
            <div className='container'><NewsletterSignup /></div>
        </>
    )
}
export default OurHistory;