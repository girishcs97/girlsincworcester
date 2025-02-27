import React from 'react';
import PieChart from '../../images/piechart.png';
import Report1 from '../../images/report1.png';
import Report2 from '../../images/report2.png';
import Dakota from '../../images/dakota.jpg'
import Nonprofit1 from '../../images/nonprofit1.jpeg'
import Nonprofit2 from '../../images/nonprofit2jpeg.png';
import Financialslogo from '../../images/financialslogo.jpeg';
import NewsletterSignup from '../newslettersignup/newslettersignup';

const OurFinancials = () => {

    const annualReports = [
        {
            year: '2024',
            image: Report1,
            reportLink: '#',
            auditLink: '#'
        },
        {
            year: '2023',
            image: Report2,
            reportLink: '#',
            auditLink: '#'
        }
    ];

    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }}>
                        Financials
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        For every $1.00 raised,  <span className="text-danger"> 70 cents </span> goes to supporting girls’ development.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={Financialslogo}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="container py-5">
                {/* Our Numbers Section */}
                <section className="text-center mb-5">
                    <div className="d-inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#eeff41" }}>
                        <span className="text-uppercase fw-bold" style={{ backgroundColor: "#eeff41" }}>Our Numbers</span>
                    </div>

                    <h2 className="mb-4 fs-2 fw-bold">
                        At Girls Inc., we are committed to{' '}
                        <span className="text-danger">using your generous <br/>donations responsibly.</span>
                    </h2>

                    <p className="mb-5 fw-bold">
                        We continually take steps to increase and ensure our financial resiliency and sustainability.
                    </p>

                    <h3 className="mb-4 fw-bold">Allocation of Expenses</h3>

                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img src={PieChart} alt={''} />
                        </div>
                    </div>
                </section>

                {/* Annual Reports Section */}
                <section className="bg-danger text-white py-5 mb-5">
                    <div className="container">
                        <div className="d-inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#eeff41" }}>
                            <span className="text-uppercase fw-bold text-black">Annual Reports</span>
                        </div>

                        <h2 className="mb-4 text-white">
                            Read all about the progress we have made from year to year.
                        </h2>

                        <div className="mb-4">
                            <a href="#" className="text-white text-decoration-none">
                                Form 990 ↗
                            </a>
                        </div>

                        <div className="row g-4">
                            <div className='col-md-2'></div>
                            {annualReports.map((report) => (
                                <div key={report.year} className="col-md-4">
                                    <div className="d-flex gap-4">
                                        <div className="card bg-white rounded-4 overflow-hidden">
                                            <img
                                                src={report.image}
                                                alt={`${report.year} Annual Report`}
                                                className="card-img-top"
                                            />
                                            <div className="card-body text-center">
                                                <a href={report.reportLink} className="btn btn-outline-danger">
                                                    {report.year} Annual Report ↗
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="quote-section d-flex justify-content-center align-items-center">
                <div className="quote-section d-flex justify-content-center align-items-center">
                    <div className="quote-card text-center">
                        <span className="quote-icon">&#8220;</span>
                        <p className="quote-text">Being Strong, Smart & Bold means you are fearless!</p>
                        <div className="quote-author d-flex align-items-center justify-content-center">
                            <img src={Dakota} className="author-img rounded-circle" alt="Raquel" />
                            <span className="author-name text-warning">RAQUEL</span>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
                {/* Trusted Nonprofit Section */}
                <section className="text-center mb-5">
                    <div className="d-inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#eeff41" }}>
                        <span className="text-uppercase fw-bold" style={{ backgroundColor: "#eeff41" }}>Trusted Nonprofit</span>
                    </div>

                    <div className="mb-4">
                        <p className="fs-5 mb-3 fw-bold">
                            Girls Inc. of Worcester received{' '}
                            <span className="text-danger">Charity Navigator's</span>{' '}
                            highest ranking of four stars, recognizing our commitment to sound fiscal management,
                            accountability, and transparency.
                        </p>

                        <p className="fs-5 fw-bold">
                            Girls Inc. of Worcester received{' '}
                            <span className="text-danger">GuideStar's</span>{' '}
                            Gold Seal of Transparency.
                        </p>
                    </div>

                    <div className="row justify-content-center align-items-center g-4">
                        <div className="col-6 col-md-3">
                            <img
                                src={Nonprofit1}
                                style={{width:'50%',height:'50%'}}
                                alt="Charity Navigator Four Star Rating"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-6 col-md-3">
                            <img
                             style={{width:'50%',height:'50%'}}
                                src={Nonprofit2}
                                alt="GuideStar Gold Seal"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <div className='container'><NewsletterSignup /></div>
        </>
    );
};

export default OurFinancials;