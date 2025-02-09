import React from "react";
import AlumnaeImg from '../../images/AlumnaeImg.jpg'
import { Container, Row, Col, Button } from "react-bootstrap";
import NewsletterSignup from "../newslettersignup/newslettersignup";

const AdvocacyEducation = () => {

    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Advocacy & Education</span>
                    <h1 className="fw-bold">
                        <span className="text-danger">Join us </span>and help create the world our girls deserve.
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
            <Container className="text-center py-5">
                <Row>
                    <Col>
                        <h1>
                            Become an <span style={{ color: "#ff3366" }}>advocate for girls</span> and
                            speak up on their behalf.
                        </h1>
                        <p className="mt-4">
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
                            size="lg"
                            className="mt-3"
                            style={{ borderRadius: "30px" }}
                        >
                            National Become An Advocate →
                        </Button>
                    </Col>
                </Row>
            </Container>
            <NewsletterSignup />
        </>
    );
};

export default AdvocacyEducation;
