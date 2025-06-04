import React from "react";
import NewsletterSignup from "../newslettersignup/newslettersignup";
import CareerLogo from '../../images/career.jpg';
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import './career.css';

function Careers() {
    return (
        <div>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                        Employment Opportunities
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        At Girls Inc., <span className="text-danger">ur People </span>are at the heart of everything we do.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={CareerLogo}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="careers-section py-5 text-center">
                <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                    CAREERS WITH GIRLS INC.
                </span>

                <h2 className="text-danger fw-bold mb-3">Join the Girls Inc. Team!</h2>

                <p className="fw-semibold mx-auto mb-4" style={{ maxWidth: "700px" }}>
                    Explore exciting opportunities to make a meaningful impact on the lives of young girls in our community. We invite you to discover how you can contribute to creating a brighter future for the girls we serve.
                </p>

                <Button className="apply-btn mb-5" variant="danger">
                    APPLY ONLINE <i className="bi bi-box-arrow-up-right ms-1"></i>
                </Button>

                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/counselors.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Administrative Intern
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Administrative Intern <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Assistant Director of Afterschool Programs
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Assistant Director of Afterschool Programs <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Assistant Group Lead Facilitator - Summer Program
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Assistant Group Lead Facilitator <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/counselors.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Communications & Events Coordinator
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Communications & Events Coordinator <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Eureka MetroWest Mentor – Summer 2025
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Eureka MetroWest Mentor – Summer 2025 <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Grant Researcher Intern
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Grant Researcher Intern <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/counselors.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Group Lead Summer Program Facilitator
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Group Lead Summer Program Facilitator <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Manager of Grants
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Manager of Grants <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Marketing and Communications Intern - Summer 2025

                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Marketing and Communications Intern
                                        <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/counselors.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Wellness and Equity Intern

                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Wellness and Equity Intern
                                        <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Youth Connect Assistant Lead Staff – Summer 2025
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Youth Connect Assistant Lead Staff <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="career-card shadow-sm">
                                <Card.Img variant="top" src="/images/drivers.jpg" />
                                <Card.Body>
                                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                                        Youth Connect Lead Staff - Summer 2025
                                    </span>
                                    <Button variant="danger" className="w-100 rounded-pill mt-2">
                                        Youth Connect Lead Staff - Summer 2025
                                        <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className="py-5" style={{ maxWidth: "900px" }}>
                    <h2 className="fw-bold mb-4">
                        Equal Opportunity Employment Opportunity & Non-Discrimination Policy
                    </h2>
                    <p>
                        At Girls Inc., employment is based upon one’s capabilities and qualifications. It is the
                        policy of Girls Inc. to ensure equal employment opportunity without discrimination or
                        harassment on the basis of race, color, sex, religion, national origin, citizenship,
                        pregnancy, sexual orientation, gender identity, age, disability, genetic information,
                        military status and political belief or any other protected characteristic as protected by
                        law. Girls Inc. prohibits and will not tolerate any such discrimination or harassment by
                        supervisors or employees. Girls Inc. will not tolerate harassment of our employees by
                        anyone, including vendors.
                    </p>
                    <p>
                        The policy of Equal Employment Opportunity and non-discrimination applies to all policies
                        and procedures relating to recruitment, hiring, training, evaluation, promotion,
                        compensation, benefits, transfer, layoff, termination and all other privileges and
                        conditions of employment. Employees’ questions or concerns relating to Equal Employment
                        Opportunity, discrimination and harassment, should be referred to the VP of Personnel &
                        Administration. Appropriate disciplinary action will be taken against any employee
                        violating this policy.
                    </p>
                    <p>
                        As a measure of creating awareness, Girls Inc. will include the statement, ‘Equal
                        Opportunity Employer’ in all advertisements and job postings.
                    </p>

                    <h3 className="fw-bold mt-5">Our Workplace</h3>
                    <p className="text-justify mt-3">
                        We believe that in order to be most effective in generating positive and measurable outcomes
                        for the girls we serve, we must always value what makes each of us unique. We must respect
                        and appreciate the multitude of ideas, approaches, and perspectives that result from people
                        of different backgrounds, cultures, lifestyles, and experiences coming together for a common
                        purpose. We must not discriminate against anyone for any reason.
                    </p>
                    <p>
                        We also believe that our organization should mirror the girls and communities we serve, so
                        our Girls Inc. community of management, staff, and volunteers reflect the girls and young
                        women who participate in our programs.
                    </p>
                </Container>
            </div>
            <div className="container"><NewsletterSignup /></div>
        </div>
    );
}

export default Careers;