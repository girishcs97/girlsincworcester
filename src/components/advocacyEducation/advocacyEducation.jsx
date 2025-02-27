import React from "react";
import AlumnaeImg from '../../images/AlumnaeImg.jpg'
import { Container, Row, Col, Button } from "react-bootstrap";
import NewsletterSignup from "../newslettersignup/newslettersignup";

const AdvocacyEducation = () => {

    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                        Advocacy & Education
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        <span className="text-danger">Join us </span>and help create the world our girls deserve.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={AlumnaeImg}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <Container className="container text-center py-5">
                <Row>
                    <Col>
                        <h2 className="fw-bold">
                            Become an <span style={{ color: "#ff3366" }}>advocate for girls</span> and
                            speak up on their behalf.
                        </h2>
                        <p className="mt-4 fw-bold">
                            Girls Inc. knows that democracy is stronger when more voices are heard
                            and everyone is engaged.
                        </p>
                        <p>
                            Be the first to know when your voice is needed. <br />
                            Tell your elected officials that girls matter.
                        </p>
                        <Button
                            href="#"
                            variant="danger"
                            size="md"
                            className="mt-3 fw-bold"
                            style={{ borderRadius: "30px",backgroundColor: '#ED1849'  }}
                        >
                            National Become An Advocate →
                        </Button>
                    </Col>
                </Row>
            </Container>
            <div className="container"><NewsletterSignup /></div>

        </>
    );
};

export default AdvocacyEducation;
