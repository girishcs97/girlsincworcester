import React, { useState } from 'react';
import { Container, Row, Col, Badge, Modal, Button, Form } from 'react-bootstrap';
import ResourceImage from '../../images/resources.jpg';
import NewsletterBanner from '../../images/newsletter.png'; // Make sure this image exists

function ResourcesHub() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Header Section */}
      <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f7f7f2' }}>
        {/* Text Content */}
        <div className="col-lg-6 text-center text-lg-start px-4">
          <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 fs-6 fw-bold">
            RESOURCES
          </Badge>
          <h1 className="mt-3 fw-bold" style={{ fontSize: '36px' }}>
            Resources for <span className="text-danger">talking to your kids</span>.
          </h1>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 text-center mt-4 mt-lg-0 pe-4">
          <img
            src={ResourceImage}
            alt="Resources for talking to your kids"
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover', clipPath: "ellipse(90% 100% at 100% 50%)" }}
          />
        </div>
      </section>

      {/* National Resource Hub link */}
      <div className="container d-flex justify-content-center mb-3">
        <a
          href="https://www.girlsinc.org/resources-hub?affiliate=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-danger text-decoration-underline fw-bold"
          style={{ fontSize: '0.95rem' }}
        >
          National Resource Hub <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </div>

      {/* Newsletter Banner */}
      <section className="position-relative z-3" style={{ marginBottom: '-50px' }}>
        <div className="container d-flex justify-content-center">
          <div
            className="position-relative overflow-hidden shadow-lg rounded-4 w-100"
            style={{ transform: 'translateY(20px)', maxWidth: '80%' }}
          >
            {/* Banner Image */}
            <img
              src={NewsletterBanner}
              alt="Newsletter"
              className="img-fluid w-100 rounded-4"
              style={{ objectFit: 'cover' }}
            />

            {/* Text Overlay */}
            <div
              className="position-absolute top-0 start-0 h-100 d-flex flex-column justify-content-center px-4 px-md-5"
              style={{ width: '48%' }}
            >
              <span className="badge bg-warning text-dark fw-bold mb-2 px-3 py-1" style={{ fontSize: '0.8rem' }}>
                JOIN THE MOVEMENT
              </span>
              <h5 className="fw-bold text-white mb-3" style={{ fontSize: '1.4rem', lineHeight: '1.4' }}>
                Sign Up For The Girls Inc. Newsletter Today!
              </h5>
              <button
                className="btn btn-danger px-4 py-2 fw-bold rounded-pill w-auto"
                style={{ fontSize: '0.9rem' }}
                onClick={() => setShowModal(true)}
              >
                Sign Up Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#ED1849', color: '#fff' }}>
          <Modal.Title>
            Join us in building a new generation of <br />
            <strong>strong, smart, and bold leaders!</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#ED1849', color: '#fff' }}>
          <p className="mb-4">
            Join our newsletter today and stay informed about our ongoing work to provide girls with the mentorship,
            safe spaces, and resources to succeed.
          </p>
          <div className="bg-white p-4 rounded">
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address*</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" required />
              </Form.Group>
              <Button variant="danger" type="submit" className="fw-bold">
                Sign Up
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ResourcesHub;
