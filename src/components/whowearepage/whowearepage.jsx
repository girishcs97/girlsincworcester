import React from 'react';
import WhoweareLogo from '../../images/whoweare.jpg';
import './whowearepage.css';
import Annual from '../../images/annual.png';
import Team from '../../images/team.png'
import BillRights from '../../images/billrights.png';
import Champions from '../../images/champions.png';
import History from '../../images/history.png';
import Partners from '../../images/partners.png';
import GetInvolved from './getinvolved';


function WhoweAre() {
    const cards = [
        {
            id: 1,
            imgSrc: Team,
            category: "OUR LEADERSHIP",
            title: "Meet Our Team",
            description: "Our dedicated leadership team sets the strategic direction for the organization.",
            buttonText: "Our Team →",
        },
        {
            id: 2,
            imgSrc: Annual,
            category: "OUR FINANCIALS",
            title: "Annual Reports",
            description: "86ȼ of every dollar spent goes directly to supporting girls’ development.",
            buttonText: "Our Financials →",
        },
        {
            id: 3,
            imgSrc: Partners,
            category: "OUR PARTNERS",
            title: "Our Corporate Partners & Funders",
            description: "Our partners are committed to increasing access and opportunities for all girls.",
            buttonText: "Our Partners →",
        },
        {
            id: 4,
            imgSrc: Champions,
            category: "OUR CHAMPIONS",
            title: "Champions for Girls",
            description: "Girls Inc. relies on your investment to provide the new generation of leaders with the support they need to succeed.",
            buttonText: "Our Champions →",
        },
        {
            id: 5,
            imgSrc: History,
            category: "HOW IT STARTED",
            title: "Our History",
            description: "We were founded in 1864 to serve girls and young women who were experiencing upheaval in the aftermath of the Civil War.",
            buttonText: "Our History →",
        },
        {
            id: 6,
            imgSrc: BillRights,
            category: "BILL OF RIGHTS",
            title: "Our Bill of Rights",
            description: "Girls Inc. is an advocate for girls and honors the Girls Inc. Bill of Rights as part of our continued commitment",
            buttonText: "Our Bill of Rights →",
        },
        

    ];
    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{backgroundColor:'#f4f4ef'}}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{marginLeft:'15px'}}>
                    <span className="badge text-dark px-3 py-1" style={{backgroundColor:"#eeff41"}}>
                        WHO WE ARE
                    </span>
                    <h1 className="mt-4 fw-bold" style={{fontSize:'36px'}}>
                        <span className="text-danger">Girls Inc.</span> is the preeminent
                        girls’ leadership organization equipping girls to reach their full
                        potential.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={WhoweareLogo}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <div className="container text-center py-5  ">
                <span className="badge text-dark fw-bold px-3 py-2" style={{backgroundColor:"#eeff41"}}>OUR STORY</span>
                <h2 className="mt-3">
                    <span className="text-danger fw-bold">Working with and on behalf of girls for 50 years </span>
                    <span className="fw-bold">has given us unparalleled knowledge and expertise.</span>
                </h2>
                <p className="text-muted mt-3">
                    The Girls Inc. Experience changes the trajectory of girls’ lives and prepares them for lifelong success.
                </p>
            </div>
            <div className="container py-5">
                <div className="row g-4">
                    {cards.map((card) => (
                        <div key={card.id} className="col-md-4">
                            <div className="card shadow-lg overflow-hidden rounded-4 border-0">
                                <div className="card-img-container">
                                    <img src={card.imgSrc} className="card-img-top zoom-img" alt={card.title} />
                                </div>
                                <div className="card-body">
                                    <span className="badge text-dark fw-bold mb-2" style={{backgroundColor:"#eeff41"}}x>{card.category}</span>
                                    <h5 className="fw-bold">{card.title}</h5>
                                    <p className="text-muted">{card.description}</p>
                                    <a href="#" className="btn btn-danger rounded-pill px-4">
                                        {card.buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='container'>
                <GetInvolved />
            </div>
        </>
    );
}

export default WhoweAre;
