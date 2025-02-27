import React from 'react';
import WhatwedoImg from '../../images/whatwedo.jpg';
import Advocacy from '../../images/advocacy.jpg';
import Diff1 from '../../images/Difference1.png';
import Diff2 from '../../images/Difference2.png';
import Diff3 from '../../images/Difference3.png';
import National from '../../images/national.jpg';
import Learn1 from '../../images/learn1.png';
import Learn2 from '../../images/learn2.jpg';
import Learn3 from '../../images/learn3.jpg';
import GetInvolved from '../whowearepage/getinvolved';
import { Col, Container, Row } from 'react-bootstrap';

function Whatwedo() {
    const statistics = [
        {
            title: 'STRONG & HEALTHY',
            percentage: '91%',
            description: 'Of girls say they would know what to do if a friend was feeling sad, stressed, or depressed.',
            image: Learn1,
            bgColor: '#FF497C',
            badgeColor: '#FF497C',
            shadowColor: '#FFE600'
        },
        {
            title: 'SMART & EDUCATED',
            percentage: '90%',
            description: 'Of girls are confident they will be graduating college soon.',
            image: Learn2,
            bgColor: '#FF497C',
            badgeColor: '#FFA600',
            shadowColor: '#FFE600'
        },
        {
            title: 'BOLD & INDEPENDENT',
            percentage: '87%',
            description: 'Of girls believe it\'s important to be an active and informed citizen.',
            image: Learn3,
            bgColor: '#FF497C',
            badgeColor: '#FFE600',
            shadowColor: '#FFE600'
        }
    ];
    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                        WHAT WE DO
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        Mentorship, a pro-girl environment, and proven programs{" "}
                        <span className="text-danger">prepare girls</span> for independent
                        life.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={WhatwedoImg}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <Container className="text-center my-5">
                <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                    OUR MISSION
                </span>
                <br />
                <br />
                <Row>
                    <Col>
                        <h2 className='fw-bold'>Our <span className="text-danger">Mission</span></h2>
                        <p className=''>Girls Inc. inspires all girls to be strong, smart, and bold.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h2 className='fw-bold'>Our <span className="text-danger">Vision</span></h2>
                        <p className=''>Powerful girls in an equitable society.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h2 className='fw-bold'>Our <span className="text-danger">Values</span></h2>
                        <ul className="list-unstyled" >
                            <li>Respect the dignity of each human being.</li>
                            <li>Recognize and support the strength in every girl.</li>
                            <li>Appreciate, embrace, and advance diversity.</li>
                            <li>Drive for results anchored in accountability.</li>
                            <li>Operate collaboratively.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <section className="py-5 text-center" style={{ backgroundColor: '#ED1849' }}>
                <div className="container">
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                        OUR DIFFERENCE
                    </span>
                    <br />
                    <br />
                    <p className="text-white fw-bold mb-5" style={{ fontSize: '1.5rem' }}>
                        <span style={{ color: '#eeff41' }}>Through the Girls Inc. Experience</span>, our professionally trained staff and volunteers provide mentorship, safe spaces, and programming that address the unique challenges girls face and are proven to help girls succeed.
                    </p>
                    <p className="text-white mb-5">
                        We cultivate safe environments where girls are encouraged to take risks, learn from experiences, and grow.
                    </p>

                    <div className="row g-4">
                        <div className='col-md-1'></div>
                        <div className="col-md-3 d-flex">
                            <div className="card border-0 shadow flex-fill">
                                <img
                                    src={Diff1}
                                    className="card-img-top"
                                    alt="Pro-Girl"
                                />
                                <div className="card-body text-center">
                                    <div className="badge bg-warning text-dark mb-3">Pro-Girl</div>
                                    <p className="card-text">
                                        We cultivate a pro-girl environment that encourages girls to be their authentic selves.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="card border-0 shadow flex-fill">
                                <img
                                    src={Diff2}
                                    className="card-img-top"
                                    alt="Evidence-Based"
                                />
                                <div className="card-body text-center">
                                    <div className="badge bg-warning text-dark mb-3">Evidence-based</div>
                                    <p className="card-text">
                                        The Girls Inc. Experience has positive and lasting effects for the girls who participate.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="card border-0 shadow flex-fill">
                                <img
                                    src={Diff3}
                                    className="card-img-top"
                                    alt="Comprehensive"
                                />
                                <div className="card-body text-center">
                                    <div className="badge bg-warning text-dark mb-3">Comprehensive</div>
                                    <p className="card-text">
                                        Girls are equipped with the skills to effect positive changes in their lives and to become leaders who will change the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </section>
            <div className="container my-5 d-flex flex-column flex-lg-row align-items-center">
                <div className="text-section col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="badge text-dark mb-3" style={{ backgroundColor: "#eeff41" }}>ADVOCACY & EDUCATION</div>
                    <h3 className="fw-bold">
                        Girls Inc. works with and for girls to advocate for policies to overcome
                        the social and systemic barriers that threaten their ability to succeed.
                    </h3>
                    <p className="mt-3">
                        <span className='fw-bold'>Together, we advocate especially for the needs of girls</span> from low-income
                        communities and those who may face discrimination because of their gender,
                        race, religion, ethnicity, immigration status, disability, socioeconomic
                        status, sexual orientation, and gender identity.
                    </p>
                    <button className="btn px-4 py-2 fw-bold" style={{ backgroundColor: "#ED1849", color: 'white' }}>
                        Learn About our Advocacy →
                    </button>
                </div>
                <div className="image-section col-lg-6 d-flex justify-content-center">
                    <img
                        src={Advocacy}
                        alt="Girls Inc"
                        className="rounded-circle img-fluid"
                        style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>
            <section className="py-5 text-center">
                <div className="p-3">

                    {/* Section Title */}
                    <div className="mb-5">
                        <div className="badge text-dark mb-3" style={{ backgroundColor: "#eeff41" }}>What Girls Learn</div>
                        <p className="text-white fw-bold" style={{ fontSize: '1.5rem' }}>
                            Girls build the <span style={{ color: '#ffe600' }}>knowledge</span>, skills, and confidence to push for positive change in their lives and their communities.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            {statistics.map((stat, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card border-0 position-relative" style={{ borderRadius: '20px', boxShadow: `0 4px 15px ${stat.shadowColor}` }}>
                                        <div className="card-body text-center">
                                            <span className="badge text-white mb-3" style={{ backgroundColor: stat.badgeColor, borderRadius: '20px', padding: '5px 10px' }}>
                                                {stat.title}
                                            </span>
                                            <h1 className="text-danger display-4 fw-bold">{stat.percentage}</h1>
                                            <p className="text-dark">{stat.description}</p>
                                            <img src={stat.image} alt="" className="rounded-circle mb-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                                            <div className="text-danger fs-4">➔</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="row mt-5 align-items-center">
                        <div className="col-md-6 text-start text-md-center">
                            <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                                Role of Girls Inc. National
                            </span>
                            <br />
                            <br />
                            <h3 className="text-black fw-bold mb-4">
                                Providing thought leadership and resources to our network of <span className="text-danger fw-bold">75 Girls Inc. Affiliates</span> across the US and Canada.
                            </h3>
                            <p className="text-black">
                                <span className='fw-bold'>Local Affiliate partnerships</span> enhance goals and provide strategic direction for over 100,000 girls.
                            </p>
                            <a href="#" className="btn text-white text-uppercase fw-bold" style={{ borderRadius: '30px', backgroundColor: '#ED1849' }}>
                                Learn More About National →
                            </a>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src={National}
                                alt="Girls Inc"
                                className="rounded-circle img-fluid"
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <GetInvolved />
        </>
    );
}

export default Whatwedo;