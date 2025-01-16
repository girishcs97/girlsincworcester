import React from "react";
import RD from '../../images/researchdata.jpg'
import OutcomeImg from '../../images/outcome.jpg'
import Dakota from '../../images/dakota.jpg'
import "./ProjectCard.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import GetInvolved from "../whowearepage/getinvolved";

const ResearchData = () => {
    const cardData = [
        {
            value: "100,000+",
            description: "Ages of Girls 5-18",
            icon: "👧",
          },
          {
            value: "800+",
            description: "Sites in 350 Cities",
            icon: "🌎",
          },
          {
            value: "83%",
            description: "Identify as Girls of Color",
            icon: "🌈",
          },
          {
            value: "55%",
            description: "Live in Households Earning $30,000 a Year or Less",
            icon: "🏠",
          },
        ];

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
                <div style={styles.container}>
      {cardData.map((item, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.value}>{item.value}</h2>
          <p style={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>

                
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

const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      gap: "20px",
    },
    card: {
      flex: "1",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      textAlign: "center",
      maxWidth: "250px",
    },
    value: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#d71e2a",
    },
    description: {
      fontSize: "16px",
      color: "#333",
    },
  };

export default ResearchData;
