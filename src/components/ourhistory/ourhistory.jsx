import React from 'react';
import History from '../../images/history.jpg'
import History1 from '../../images/history1.jpg'
import History2 from '../../images/history2.jpg'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const OurHistory = () => {
    
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">OUR HISTORY</span>
                    <h1 className="fw-bold">
                        Girls Inc. is the <span className="text-danger">longest-running girls’</span> leadership organization.
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={History}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <Container className="text-center my-5">
                <Row>
                    <Col>
                        <h2>Our <span className="text-danger">Mission</span></h2>
                        <p>Girls Inc. inspires all girls to be strong, smart, and bold.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h2>Our <span className="text-danger">Vision</span></h2>
                        <p>Powerful girls in an equitable society.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h2>Our <span className="text-danger">Values</span></h2>
                        <ul className="list-unstyled">
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
                        <h3 className="font-weight-bold">
                            Girls Inc. was <span className="text-danger">founded in 1864</span> to serve girls and young women
                            who were experiencing upheaval in the aftermath of the Civil War.
                        </h3>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <p>
                            Across the decades, we adapted to meet the specific environmental challenges facing girls and young women,
                            always working in partnership with schools and communities, and guided by our founders’ fundamental belief
                            in the inherent potential of each girl. Woven into those early girls’ clubs are the same core values of
                            Girls Inc. today: the importance of creating a safe gathering place for girls to learn and to share in a
                            sisterhood and a strong premise that each girl can develop her own capacities, self-confidence, and grow up
                            healthy, educated, and independent.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                {/* First Section */}
                <Row className="align-items-center mb-5">
                    <Col md={6} className="text-center">
                        <h2>
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
                            alt="Historical image of Girls Inc."
                            className="img-fluid rounded-circle border border-warning"
                        />
                    </Col>
                </Row>

                {/* Second Section */}
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <img
                            src={History2}
                            alt="Girls Inc. of New Hampshire historical image"
                            className="img-fluid rounded-circle border border-warning"
                        />
                    </Col>
                    <Col md={6} className="text-center">
                        <h2>
                            Girls Inc. of New Hampshire celebrates <span className="text-danger">50 years</span> this year.
                        </h2>
                        <p>
                            We’ve served thousands of New Hampshire girls over this span of time. What we’ve learned is that girls are
                            innately powerful, and they are the strong, smart, and bold leaders our communities need.
                        </p>
                    </Col>
                </Row>

                {/* Third Section - Callout */}
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="text-center shadow p-4">
                            <Card.Body>
                                <Card.Title className="text-uppercase text-warning">Girls’ Bill of Rights</Card.Title>
                                <Card.Text>
                                    We will always support girls and ensure that their rights are recognized and respected.
                                </Card.Text>
                                <Button variant="danger" href="#" className="text-uppercase">
                                    Our Bill of Rights →
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default OurHistory;