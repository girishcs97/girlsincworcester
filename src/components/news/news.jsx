import React, { useState } from 'react';
import PressImage from '../../images/news_img1.jpeg';
import ContactImage from '../../images/news_img2.jpg';
import NewsletterBanner from '../../images/newsletter.png';
import { Container, Dropdown, Pagination, Badge, Modal, Button, Form } from 'react-bootstrap';
import NewsletterSignup from '../newslettersignup/newslettersignup';

const newsData = [
  {
    date: 'November 14, 2024',
    title: 'Girls Inc. of New Hampshire celebrates Completion of Economic Literacy Program',
    summary: "Girls who participate in Girls Inc.'s after-school programming at its Manchester center celebrated the completion of Absolute Success, an economic literacy program...",
    link: '#'
  },
  {
    date: 'September 24, 2024',
    title: 'Girls Inc. of New Hampshire Welcomes Seven New Board Members',
    summary: 'Girls Inc. of New Hampshire recently welcomed seven new board members to its board of directors. The seven newcomers...',
    link: '#'
  },
  {
    date: 'September 14, 2023',
    title: 'Crocs for every girl from Girls Inc. of NH thanks to partnership with Brady Sullivan',
    summary: 'As the school year gets underway, 175 girls who participate in Girls Inc. of New Hampshire programs in Nashua and Manchester...',
    link: '#'
  },
  {
    date: 'February 24, 2022',
    title: 'Girls Inc. NH named a 2022 recipient of a Citizens Champions in Action award',
    summary: 'Girls Inc. of New Hampshire, the local branch of a national organization that provides after-school and summer programs, mentorship and life-skills...',
    link: '#'
  }
];

function NewsPressSection() {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const perPage = 2;
  const totalPages = Math.ceil(newsData.length / perPage);
  const displayNews = newsData.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative d-flex flex-column flex-lg-row align-items-center justify-content-between py-5"
        style={{ backgroundColor: '#f7f7f2', overflow: 'hidden' }}
      >
        <div className="col-lg-6 ps-lg-5 px-4 text-center text-lg-start">
          <Badge
            bg="warning"
            text="dark"
            className="mb-3 px-3 py-2 fw-bold text-uppercase"
            style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
          >
            News
          </Badge>
          <h2 className="fw-bold" style={{ fontSize: '2.2rem', maxWidth: '90%', lineHeight: '1.4' }}>
            View the latest Girls Inc. <span className="text-danger">press releases and statements below</span>
          </h2>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0 d-flex justify-content-end pe-0">
          <div
            className="w-100 h-100"
            style={{
              clipPath: 'ellipse(90% 100% at 100% 50%)',
              WebkitClipPath: 'ellipse(90% 100% at 100% 50%)',
              height: '100%',
              maxHeight: '480px',
              overflow: 'hidden',
              flex: '1 1 auto',
            }}
          >
            <img
              src={PressImage}
              alt="Girls Inc Press"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover', transition: 'transform 0.4s ease-in-out' }}
            />
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="d-flex flex-column flex-md-row align-items-center justify-content-between px-5 py-5">
        <div className="col-md-6 text-center text-md-start">
          <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 fw-bold">
            PRESS INQUIRIES
          </Badge>
          <h3 className="fw-bold">Media Contact</h3>
          <p className="mt-3">
            <strong>Press inquiries should be directed to</strong> Sharron McCarthy, Chief Executive Officer.
          </p>
          <a href="mailto:sharron@girlsincworcester.org" className="btn btn-danger fw-bold mt-2">
            <i className="bi bi-envelope-fill me-2"></i>Sharron McCarthy
          </a>
        </div>
        <div className="col-md-5 mt-4 mt-md-0 d-flex justify-content-center">
          <div
            className="rounded-circle border border-4 border-warning"
            style={{ width: '280px', height: '280px', overflow: 'hidden', position: 'relative' }}
          >
            <img src={ContactImage} alt="Contact" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* News Cards Section */}
      <Container className="py-5">
        <h5 className="fw-bold mb-3">Filter By Published Date</h5>
        <Dropdown className="mb-4">
          <Dropdown.Toggle variant="light" className="fw-bold border rounded px-4 py-2">
            Newest To Oldest
          </Dropdown.Toggle>
        </Dropdown>

        {displayNews.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm rounded-4 p-4 mb-4 text-start"
            style={{ borderRadius: '30px' }}
          >
            <Badge bg="warning" text="dark" className="mb-2 text-uppercase px-3 py-2 fw-bold">
              {item.date.toUpperCase()}
            </Badge>
            <h6 className="fw-bold mt-2">
              <a href={item.link} className="text-danger text-decoration-none">
                {item.title}
              </a>
            </h6>
            <p className="mb-0 text-dark">{item.summary}</p>
          </div>
        ))}

        <Pagination className="mt-5 justify-content-center">
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx + 1}
              active={page === idx + 1}
              onClick={() => setPage(idx + 1)}
              style={page === idx + 1 ? { backgroundColor: '#eeff41', border: 'none' } : {}}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
          {page < totalPages && (
            <Pagination.Next onClick={() => setPage(page + 1)}>Next Page</Pagination.Next>
          )}
        </Pagination>
      </Container>
      <div className="container"> <NewsletterSignup /></div>
    </>
  );
}

export default NewsPressSection;
