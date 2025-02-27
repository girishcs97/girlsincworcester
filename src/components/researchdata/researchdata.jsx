import React from "react";
import RD from '../../images/researchdata.jpg'
import OutcomeImg from '../../images/outcome.jpg'
import "./ProjectCard.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import RD1 from '../../images/rd1.png';
import RD2 from '../../images/rd2.png';
import RD3 from '../../images/rd3.png';
import NewsletterSignup from "../newslettersignup/newslettersignup";

const ResearchData = () => {

  const statisticsData = [
    {
      icon: RD1,
      title: "The Impact of Girls Inc. on Academic and Behavioral Outcomes",
      link: "#",
    },
    {
      icon: RD2,
      title: "Impact Study Executive Summary",
      link: "#",
    },
    {
      icon: RD3,
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
      <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
        {/* Text Section */}
        <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
          <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
            Research & Data
          </span>
          <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
            <span className="text-danger">Measuring outcomes</span> is critical to providing girls with
            the right support and opportunities to thrive.
          </h1>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 position-relative">
          <img
            src={RD}
            alt="Girls Inc"
            className="img-fluid rounded-start"
            style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
          />
        </div>
      </section>
      <div className="container py-5">
        {/* First Section */}
        <div className="text-center my-5">
          <h3 className="fw-bold">
            Our Approach to Research
          </h3>
          <br />
          <p className="text-black mt-3">
            Supported by our use of a network-wide participant management database, Girls Inc.
            also collects annual youth survey data throughout its network of 75 affiliates and
            over 100,000 participants. When we use the latest evidence to drive quality improvement,
            sustainability, and advocacy efforts, we can inspire transformative action to support all
            girls in being Strong, Smart & Bold.
          </p>
          <br />
          <br />
          <h3 className="fw-bold">
            Girls Inc. Network At-A-Glance
          </h3>
        </div>
        <br />


        {/* Second Section */}
        <div className="text-center my-5">
          <span className="badge text-dark mb-3" style={{ backgroundColor: "#eeff41" }}>The Reports</span>
          <h3 className="fw-bold">
            Girls Inc. girls<span className="text-danger"> outperform peers </span>
            on key indicators.
          </h3>
          <p className="text-muted mt-3">
            From 2017 to 2019, the American Institutes for Research implemented a quasi-experimental research study with four Girls Inc. affiliates and their school districts in small, medium, and large communities that were reflective of the larger Girls Inc. network.
          </p><p className="text-muted mt-3">The results are truly compelling, documenting with strong evidence that Girls Inc. changes the trajectory of girls’ lives and sets them up for life-long success.
          </p>
          <div className="container my-5">
            <div className="row justify-content-center">
              {statisticsData.map((card, index) => (
                <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
                  <div className="card shadow-sm h-100 text-center" style={{ borderRadius: '15px' }}>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <img src={card.icon} className="mb-3 mx-auto" style={{ height: '80px', width: '80px' }} alt={card.title} />
                      <h5 className="card-title fw-bold">{card.title}</h5>
                      <a href={card.link} className="btn btn-outline-danger rounded-pill mt-3">
                        View Report <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-danger text-light py-5">
        <div className="bg-danger text-light py-5">
          <div className="container text-center">
            {/* Section Heading */}
            <span className="badge text-dark mb-3" style={{ backgroundColor: "#eeff41" }}>RESEARCH & DATA</span>
            <br />
            <br />
            <h2 className="fw-bold">
              Strong, Smart, and Bold Outcomes Survey
            </h2>
            <p className="mt-3 fst-italic">
              Our data-driven continuous improvement cycle includes annual surveying with the Girls Inc. Strong, Smart, and Bold Outcomes Survey (SSBOS) for girls ages 9-18. Our SSBOS looks at more than 30 key indicators of positive development, the outcomes of which are used to inform planning, make improvements in services and programming, underpin operational decisions, and communicate impact.
            </p>

            {/* Buttons */}
            <div className="gap-3 mt-4">
              <a href="#report" className="btn btn-light">
                Stronger, Smarter, Bolder: Girls Take the Lead Report →
              </a>
              <br />
              <br />
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
      <div className="container"><NewsletterSignup /></div>
    </>
  );
};
export default ResearchData;
