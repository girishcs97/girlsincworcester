import React from "react";
import Outcomes from '../../images/outcomes.jpg'
import AlumnaeImg from '../../images/AlumnaeImg.jpg'
import Dakota from '../../images/dakota.jpg'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import GetInvolved from "../whowearepage/getinvolved";

const Alumnae = () => {
    const cardStyle = {
        borderRadius: '15px',
        backgroundColor: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '8px 8px 0px 0px #eeff41, 0px 4px 30px 0px rgba(0, 0, 0, .2)',
    };
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Girls Inc. Alumnae Association</span>
                    <h1 className="fw-bold">
                         A dynamic network of incredible alums who have been part of <span className="text-danger">Girls Inc.</span>
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={AlumnaeImg}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container py-5">
                {/* First Section */}
                <div className="text-center my-5">
                    <span className="badge bg-warning text-dark mb-3">ALUMNAE</span>
                    <h1 className="fw-bold">
                    Launched in 2022, the <span className="text-danger">Girls Inc. Alumnae Association</span> is designed specifically for individuals across the US and Canada who participated in Girls Inc. programming including those from Girls Clubs of America before 1990.
                    </h1>
                    <p className="text-muted mt-3">
                    <strong>A continuation of the Girls Inc. Experience, the free Alumnae Association</strong> is open to alums and high school seniors, ages 18 and over. Members gain invaluable career advice, engage in inspirational conversations with trailblazing women leaders, and benefit from many other opportunities to continue to unlock their fullest potential!
                    </p>
                </div>
                <br />
                <br />
                <br />
                {/* Second Section */}
                <div className="text-center my-5">
                    <span className="badge bg-warning text-dark mb-3">WHERE ARE THEY NOW?</span>
                    <h2 className="fw-bold">
                        <span className="text-danger">Hear from Alumnae</span> on how Girls Inc.
                        prepared them for college, the workforce, and beyond.
                    </h2>
                    <p className="text-muted mt-3">
                        Are you a Girls Inc. Alumna? Join the Alumnae Association now!
                    </p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <a href="#alumnae" className="btn btn-danger">
                            See Our Alumnae &rarr;
                        </a>
                        <a href="#join" className="btn btn-outline-dark">
                            Join Today <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-danger text-light py-5">
                <div className="container text-center">
                    {/* Section Heading */}
                    <span className="badge bg-warning text-dark mb-3">RESEARCH & DATA</span>
                    <br />
                    <br />
                    <h1 className="fw-bold">
                        The <span className="text-warning">Girls Inc. Experience</span> has
                        positive and lasting effects for the girls who participate.
                    </h1>
                    <p className="mt-3 fst-italic">
                        “In a rigorous comparison study, we found that girls who participate
                        in the Girls Inc. Experience demonstrated improved academic
                        performance, school-related behaviors, physical activity, and
                        leadership outcomes.” – Dr. Deborah Moroney, Managing Director of the
                        American Institutes for Research
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <a href="#report" className="btn btn-light">
                            Stronger, Smarter, Bolder: Girls Take the Lead Report →
                        </a>
                        <a href="#data" className="btn btn-light text-danger">
                            Research & Data →
                        </a>
                    </div>

                    {/* Cards Section */}
                    <div style={{ backgroundColor: '#f03a47', padding: '50px 0' }}>
                        <Container>
                            <Row>
                                {/* Card 1 */}
                                <Col md={4} className="d-flex">
                                    <Card style={cardStyle} className="w-100 text-center">
                                        <Card.Body>
                                            <div style={{ backgroundColor: '#f03a47', color: 'white', padding: '5px 10px', display: 'inline-block', borderRadius: '5px', marginBottom: '20px' }}>
                                                <strong>STRONG & HEALTHY</strong>
                                            </div>
                                            <Card.Title style={{ fontSize: '3rem', color: '#f03a47', fontWeight: 'bold' }}>89%</Card.Title>
                                            <Card.Text>Of girls say they've been physically active in the past week.</Card.Text>
                                            <img src={Outcomes} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height: '100px' }} />
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 2 */}
                                <Col md={4} className="d-flex">
                                    <Card style={cardStyle} className="w-100 text-center">
                                        <Card.Body>
                                            <div style={{ backgroundColor: '#fca311', color: 'white', padding: '5px 10px', display: 'inline-block', borderRadius: '5px', marginBottom: '20px' }}>
                                                <strong>SMART & EDUCATED</strong>
                                            </div>
                                            <Card.Title style={{ fontSize: '3rem', color: '#f03a47', fontWeight: 'bold' }}>90%</Card.Title>
                                            <Card.Text>Of girls believe they will graduate from college.</Card.Text>
                                            <img src={Outcomes} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height: '100px' }} />
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 3 */}
                                <Col md={4} className="d-flex">
                                    <Card style={cardStyle} className="w-100 text-center">
                                        <Card.Body>
                                            <div style={{ backgroundColor: '#fcec00', color: 'white', padding: '5px 10px', display: 'inline-block', borderRadius: '5px', marginBottom: '20px' }}>
                                                <strong>BOLD & INDEPENDENT</strong>
                                            </div>
                                            <Card.Title style={{ fontSize: '3rem', color: '#f03a47', fontWeight: 'bold' }}>83%</Card.Title>
                                            <Card.Text>Of girls say they can use what they know to solve “real-life” problems in their communities.</Card.Text>
                                            <img src={Outcomes} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height: '100px' }} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="text-center" style={{ marginTop: '60px', color: 'white', fontSize: '0.9rem' }}>
                                <p>
                                    Statistics sourced from the 2023 Girls Inc. Strong, Smart, and Bold Outcomes Survey, reflecting national data.
                                </p>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="rounded-circle bg-light p-5 text-center" style={{ maxWidth: '500px',maxHeight:'900px'}}>
                    <p className="fs-4">
                        <span className="text-danger fw-bold" style={{ fontSize: '7rem', marginRight: '0.2rem' }}>“</span>
                        <br/>Girls Inc. makes me think outside the box all the time. I’ve learned so much and tried so many things.
                        <span className="text-danger fw-bold" style={{ fontSize: '2rem', marginLeft: '0.2rem' }}></span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <img
                            src={Dakota}
                            alt="Dakota"
                            className="rounded-circle"
                            style={{ width: '50px', height: '50px', marginRight: '0.5rem' }}
                        />
                        <span className="badge bg-warning text-dark fw-bold">DAKOTA</span>
                    </div>
                </div>
            </div>
            <GetInvolved/>
        </>
    );
};

export default Alumnae;
