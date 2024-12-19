import React from 'react';
import PieChart from '../../images/piechart.png';
import Report1 from '../../images/report1.png';
import Report2 from '../../images/report2.png';
import Dakota from '../../images/dakota.jpg'
import Nonprofit1 from '../../images/nonprofit1.jpeg'
import Nonprofit2 from '../../images/nonprofit2jpeg.png';
import Financialslogo from '../../images/financialslogo.jpeg';

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
        <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2 text-uppercase">Financials</span>
                    <h1 className="fw-bold">
                    For every $1.00 raised,  <span className="text-danger"> 70 cents </span> goes to supporting girls’ development.
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={Financialslogo}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
        <div className="container py-5">
            {/* Our Numbers Section */}
            <section className="text-center mb-5">
                <div className="d-inline-block bg-warning px-3 py-1 mb-3">
                    <span className="text-uppercase fw-bold">Our Numbers</span>
                </div>

                <h2 className="mb-4 fs-2">
                    At Girls Inc., we are committed to{' '}
                    <span className="text-danger">using your generous donations responsibly.</span>
                </h2>

                <p className="mb-5">
                    We continually take steps to increase and ensure our financial resiliency and sustainability.
                </p>

                <h3 className="mb-4">Allocation of Expenses</h3>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <img src={PieChart} alt={''} />
                    </div>
                </div>
            </section>

            {/* Annual Reports Section */}
            <section className="bg-danger text-white py-5 mb-5">
                <div className="container">
                    <div className="d-inline-block bg-warning px-3 py-1 mb-3">
                        <span className="text-uppercase fw-bold">Annual Reports</span>
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
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="rounded-circle bg-light p-5 text-center" style={{ maxWidth: '500px', maxHeight: '900px' }}>
                    <p className="fs-4">
                        <span className="text-danger fw-bold" style={{ fontSize: '7rem', marginRight: '0.2rem' }}>“</span>
                        <br />
                        Being Strong, Smart & Bold means you are fearless!
                        <span className="text-danger fw-bold" style={{ fontSize: '2rem', marginLeft: '0.2rem' }}></span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <img
                            src={Dakota}
                            alt="Dakota"
                            className="rounded-circle"
                            style={{ width: '50px', height: '50px', marginRight: '0.5rem' }}
                        />
                        <span className="badge bg-warning text-dark fw-bold">Raquel</span>
                    </div>
                </div>
            </div>
            {/* Trusted Nonprofit Section */}
            <section className="text-center mb-5">
                <div className="d-inline-block bg-warning px-3 py-1 mb-3">
                    <span className="text-uppercase fw-bold">Trusted Nonprofit</span>
                </div>

                <div className="mb-4">
                    <p className="fs-5 mb-3">
                        Girls Inc. of Worcester received{' '}
                        <span className="text-danger">Charity Navigator's</span>{' '}
                        highest ranking of four stars, recognizing our commitment to sound fiscal management,
                        accountability, and transparency.
                    </p>

                    <p className="fs-5">
                        Girls Inc. of Worcester received{' '}
                        <span className="text-danger">GuideStar's</span>{' '}
                        Gold Seal of Transparency.
                    </p>
                </div>

                <div className="row justify-content-center align-items-center g-4">
                    <div className="col-6 col-md-3">
                        <img
                            src={Nonprofit1}
                            alt="Charity Navigator Four Star Rating"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-6 col-md-3">
                        <img
                            src={Nonprofit2}
                            alt="GuideStar Gold Seal"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default OurFinancials;