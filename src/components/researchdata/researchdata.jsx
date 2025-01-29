import React from "react";
import RD from '../../images/researchdata.jpg'
import OutcomeImg from '../../images/outcome.jpg'
import "./ProjectCard.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import NewsletterSignup from "../newslettersignup/newslettersignup";

const ResearchData = () => {

  const projectCards = [
    {
      icon: "📊",
      title: "The Impact of Girls Inc. on Academic and Behavioral Outcomes",
      link: "#",
    },
    {
      icon: "💻",
      title: "Impact Study Executive Summary",
      link: "#",
    },
    {
      icon: "📝",
      title: "Lessons from AIR’s Girls Inc. Study: What Helps Girls Thrive",
      link: "#",
    },
  ];

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
          <span className="badge bg-warning text-dark mb-2">Research & Data</span>
          <h1 className="fw-bold">
            <span className="text-danger">Measuring outcomes</span> is critical to providing girls with
            the right support and opportunities to thrive.
          </h1>
        </div>
        <div className="image-section">
          <img
            src={RD}
            alt="Girls Inc group"
            className="img-fluid rounded-start"
            style={{ maxWidth: "600px" }}
          />
        </div>
      </div>
      <div className="container py-5">
        {/* First Section */}
        <div className="text-center my-5">
          <h2 className="fw-bold">
            Our Approach to Research
          </h2>
          <p className="text-muted mt-3">
            Supported by our use of a network-wide participant management database, Girls Inc.
            also collects annual youth survey data throughout its network of 75 affiliates and
            over 100,000 participants. When we use the latest evidence to drive quality improvement,
            sustainability, and advocacy efforts, we can inspire transformative action to support all
            girls in being Strong, Smart & Bold.
          </p>
          <h2 className="fw-bold">
            Girls Inc. Network At-A-Glance
          </h2>
        </div>
        <br />


        {/* Second Section */}
        <div className="text-center my-5">
          <span className="badge bg-warning text-dark mb-3">The Reports</span>
          <h2 className="fw-bold">
            Girls Inc. girls<span className="text-danger"> outperform peers </span>
            on key indicators.
          </h2>
          <p className="text-muted mt-3">
            From 2017 to 2019, the American Institutes for Research implemented a quasi-experimental research study with four Girls Inc. affiliates and their school districts in small, medium, and large communities that were reflective of the larger Girls Inc. network.
          </p><p className="text-muted mt-3">The results are truly compelling, documenting with strong evidence that Girls Inc. changes the trajectory of girls’ lives and sets them up for life-long success.
          </p>
          <div className="horizontal-container">
            {projectCards.map((card, index) => (
              <div key={index} className="project-card">
                <div className="icon">{card.icon}</div>
                <h3 className="title">{card.title}</h3>
                <a href={card.link} className="view-report">
                  View Report <span>🔗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-danger text-light py-5">
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
                        <img src={OutcomeImg} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height: '100px' }} />
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
                        <img src={OutcomeImg} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height: '100px' }} />
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
                        <img src={OutcomeImg} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height: '100px' }} />
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
      </div>
      <NewsletterSignup />
    </>
  );
};
export default ResearchData;
