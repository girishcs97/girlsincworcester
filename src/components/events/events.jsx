import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EventLogo from '../../images/eventlogo.jpg'
import IS1 from '../../images/impactstories1.jpg'
import IS2 from '../../images/impactstories2.jpeg'
import IS3 from '../../images/impactstories3.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";


const Events = () => {
    const [sortOrder, setSortOrder] = useState("newest");
    const cardsData = [
        {
          title: 'Fuel Her Fire Auction Gala',
          description: 'Join Us for the 2025 Fuel Her Fire Auction Gala! The Fuel Her Fire Auction Gala, presented by Dartmouth Health Children’s, returns on Thursday, April...',
          image: IS1,
        },
        {
          title: 'Champions for Girls Breakfast',
          description: 'A Celebration of Girls Inc. of New Hampshire supporters, donors, volunteers, and the overall success of Girls Inc. NH programs. A separate breakfast celebration will...',
          image: IS2,
        },
        {
          title: 'Granite State Golf Challenge',
          description: 'Join us on September 8, 2025, for the Girls Inc. Granite State Golf Challenge at Nashua Country Club’s Wayne Stiles golf course. Your participation supports our mission to empower underserved girls aged 5 to...',
          image: IS3,
        }
      ];
    const sortedStories = [...cardsData];
    if (sortOrder === "oldest") {
        sortedStories.reverse();
    }
    return (
        <>
            <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
                {/* Text Section */}
                <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '15px' }}>
                    <span className="badge text-dark px-3 py-1" style={{ backgroundColor: "#eeff41" }} >
                        EVENTS
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        Our annual events celebrate <span className="text-danger">remarkable leaders</span> who are helping to create a better future for girls.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={EventLogo}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <br>
            </br>
            <div className="mb-3 text-left">
                <label className="fw-bold">Filter By Published Date</label>
                <select className="form-select w-auto d-inline-block ms-2" onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="newest">Newest To Oldest</option>
                    <option value="oldest">Oldest To Newest</option>
                </select>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    {cardsData.map((card, index) => (
                        <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
                            <div className="card shadow-sm h-100" style={{ borderRadius: '15px' }}>
                                <img src={card.image} className="card-img-top" style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' ,borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} alt={card.title} />
                                <div className="card-body">
                                    <h6 className="card-title text-danger fw-bold">{card.title}</h6>
                                    <p className="card-text text-black">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container"> <NewsletterSignup /></div>

        </>
    );
};

export default Events;
