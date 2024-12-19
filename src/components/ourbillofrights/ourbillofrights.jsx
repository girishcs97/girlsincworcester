import React from 'react';
import BillLogo from '../../images/billrightslogo.jpg';
import Bill1 from '../../images/bill1.jpg'
import Bill2 from '../../images/bill2.jpg'
import Bill3 from '../../images/bill3.jpg'
import Bill4 from '../../images/bill4.jpg'
import Bill5 from '../../images/bill5.png'
import Bill6 from '../../images/bill6.jpg'
import BillHistory from '../../images/billpurpose.jpg'
import Dakota from '../../images/dakota.jpg'

const OurBillofRights = () => {
    const rights = [
        {
            id: 1,
            label: "ONE",
            title: "Girls have the right to be themselves and to resist stereotypes.",
            image: Bill1
        },
        {
            id: 2,
            label: "TWO",
            title: "Girls have the right to express themselves with originality and enthusiasm.",
            image: Bill2
        },
        {
            id: 3,
            label: "THREE",
            title: "Girls have the right to take risks, to strive freely, and to take pride in success.",
            image: Bill3
        },
        {
            id: 4,
            label: "FOUR",
            title: "Girls have the right to accept and appreciate their bodies.",
            image: Bill4
        },
        {
            id: 5,
            label: "FIVE",
            title: "Girls have the right to have confidence in themselves and to be safe in the world.",
            image: Bill5
        },
        {
            id: 6,
            label: "SIX",
            title: "Girls have the right to prepare for interesting work and economic independence.",
            image: Bill6
        }
    ];
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2 text-uppercase">Girls Inc. Girls’ Bill of Rights</span>
                    <h1 className="fw-bold">
                        We will always  <span className="text-danger">support girls</span> and ensure that their rights are recognized and respected.
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={BillLogo}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container py-5">
                {/* Who We Serve Section */}
                <section className="text-center mb-5">
                    <div className="d-inline-block bg-warning-subtle px-3 py-1 mb-3">
                        <span className="text-uppercase fw-bold">Who We Serve</span>
                    </div>
                    <h2 className="mb-4 fs-1">
                        Girls Inc. is committed to providing the{" "}
                        <span className="text-danger">Girls Inc. Experience</span>{" "}
                        to those who identify as girls and those gender expansive young people
                        who feel our pro-girl environment is the best fit for them.
                    </h2>
                    <a href="#" className="text-danger text-decoration-none">
                        Girls Inc. National Position Statement on Gender Identity ↗
                    </a>
                </section>

                {/* Our Purpose Section */}
                <section className="mb-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="d-inline-block bg-warning-subtle px-3 py-1 mb-3">
                                <span className="text-uppercase fw-bold">Our Purpose</span>
                            </div>
                            <h2 className="mb-4 fs-1">
                                All About the <span className="text-danger">Girls.</span>
                            </h2>
                            <p className="mb-4">
                                Although the times and programs have changed, Girls Inc. always has been,
                                and always will be, all about the girls. With a continued commitment and
                                dedication to making a lasting difference, Girls Inc. is a strong advocate
                                for girls and honors the Girls Inc. Bill of Rights.
                            </p>
                            <button className="btn btn-danger">
                                Download the Bill of Rights PDF →
                            </button>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="rounded-circle overflow-hidden mx-auto" style={{ maxWidth: '400px' }}>
                                <img
                                    src={BillHistory}
                                    alt="Girls Inc. participant"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rights Grid Section */}
                <div className="row g-4">
                    {rights.map((right) => (
                        <div key={right.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <img
                                    src={right.image}
                                    alt={right.title}
                                    className="card-img-top"
                                />
                                <div className="card-body p-4">
                                    <div className="d-inline-block bg-warning-subtle px-2 py-1 mb-3">
                                        <span className="text-uppercase fw-bold">{right.label}</span>
                                    </div>
                                    <p className="card-text fw-bold fs-5 mb-0">
                                        {right.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="rounded-circle bg-light p-5 text-center" style={{ maxWidth: '500px', maxHeight: '900px' }}>
                    <p className="fs-4">
                        <span className="text-danger fw-bold" style={{ fontSize: '7rem', marginRight: '0.2rem' }}>“</span>
                        <br />
                        Strong Smart & Bold means no matter if you fail, you stay strong and try again.
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
        </>

    )
}
export default OurBillofRights