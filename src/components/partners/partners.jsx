import React from "react";
import PartnersInc from '../../images/partnersinc.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";
import Jaihliani from '../../images/jaihliani.jpg'
import Ep from '../../images/EP1.png';
import Cp from '../../images/CP.png';
import Ap from '../../images/AP.png';


function PartnershipPage() {
    const statisticsData = [
        {
            title: 'Executive Partner',
            price: '$20,000',
            description: 'Company logo on two Girls Inc. buses, premiere event sponsorships, sponsor plaques at both centers',
            image: Ep,
        },
        {
            title: 'Custom Partner',
            price: '$15,000',
            description: 'Customized soundproofing panel in Nashua gym, sponsorship of athletic programs for one year, online profile, event sponsorships',
            image: Cp,
        },
        {
            title: 'Advocate Partner',
            price: '$10,000',
            description: 'Soundproof panel with logo, Summer Camp t-shirt sponsor to include company logo, event sponsorship',
            image: Ap,
        }
    ];
    return (
        <div>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                        Become A Social Media Ambassador
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        Girls Inc. invites you to<span className="text-danger"> spread our message.</span>
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={PartnersInc}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            {/* Investing in the Future Section */}
            <div className="text-center p-5 bg-light">
                <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
                    Investing in a More Equitable Future
                </span>
                <br />
                <h2 className="mt-3 fw-bold">
                    We invite you to become a partner and help our <br /> organization provide
                    girls with the tools they need to be <br />strong, smart, and bold in
                    anything they set their minds to.
                </h2>
                <p className="mt-3">
                    Girls Inc. relies on external funding to support training, curriculum,
                    and programming that help girls build the knowledge,<br /> skills, and
                    confidence to be leaders and change the world.
                </p>
                <div className="mt-4">
                    <a href="#" className="btn btn-danger">
                        Join Us ↗
                    </a>
                </div>
            </div>

            <div className="container my-5">
                <div className="row justify-content-center">
                    {statisticsData.map((card, index) => (
                        <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
                            <div className="card shadow-sm h-100 text-center" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <img src={card.image} className="mx-auto mt-3" style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }} alt={card.title} />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h3 className="card-title fw-bold">{card.title}</h3>
                                    <h6 className="card-subtitle mb-2 text-danger">{card.price}</h6>
                                    <p className="card-text">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Our Partners Section */}
            <div className="text-center p-5 bg-light">
                <span className="badge text-dark px-3 text-uppercase py-1 fw-bold" style={{ backgroundColor: "#eeff41" }} >
                    Our Partners
                </span>
                <h2 className="mt-3 fw-bold">
                    Our <span className="text-danger">funders</span> are committed to increasing the access and <br />opportunities
                    for all girls.
                </h2>
                <br />
                <br />
                <div className="mt-4">
                    <a href="#" className="btn btn-danger me-3">
                        Our Partners ↗
                    </a>
                    <a href="#" className="btn btn-outline-danger">
                        Make a Gift ↗
                    </a>
                </div>
            </div>

            {/* Impact Stories Section */}
            <div className="position-relative d-flex justify-content-center align-items-center"
                style={{
                    minHeight: '100vh'
                }}
            >
                <img src={Jaihliani} alt="Background" className="position-absolute w-100 h-100" style={{ objectFit: 'cover', zIndex: '-1' }} />
                <div className="card p-4 text-start" style={{ maxWidth: '400px', background: 'white', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <span className="badge text-dark mb-2" style={{ backgroundColor: "#eeff41" }}>Impact Stories</span>
                    <br />
                    <p className="mt-3">
                        Jaihlani reflects on the impact Girls Inc. made in her
                        personal development and her future goals.
                    </p>
                    <button className="btn btn-pink mt-3" style={{ backgroundColor: '#ed1849', color: 'white', borderRadius: '25px' }}>
                        Read Full Story →
                    </button>
                </div>
            </div>
            <div className="container"><NewsletterSignup /></div>
        </div>
    );
}

export default PartnershipPage;
