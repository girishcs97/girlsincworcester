import React, { useState } from 'react';
import { Container, Row, Col, Badge, Modal, Button, Form } from 'react-bootstrap';
import ResourceImage from '../../images/resources.jpg';
import NewsletterBanner from '../../images/newsletter.png'; // Make sure this image exists
import NewsletterSignup from '../newslettersignup/newslettersignup';

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

      <div className="container"> <NewsletterSignup /></div>
    </>
  );
}

export default ResourcesHub;
