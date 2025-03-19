import React, { useState } from "react";
import IS from '../../images/impactstories.jpeg'
import IS1 from '../../images/impactstories1.jpg'
import IS2 from '../../images/impactstories2.jpeg'
import IS3 from '../../images/impactstories3.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";

const ImpactStories = () => {
    
    const cardsData = [
        {
            name: "Kelly Thompson",
            quote: "I can’t imagine what would have happened without Girls Inc. in my life and I am deeply grateful for everything it gave to me.",
            image: IS1,
        },
        {
            name: "Sue Hillsgrove",
            quote: "Girls Inc. was more than just an after-school program for us; it was our village.",
            image: IS2,
        },
        {
            name: "Kaylee Hubbard",
            quote: "Being bold helped me foster creativity, create opportunities, and set myself apart from the competition.",
            image: IS3,
        },
    ];
    const [sortOrder, setSortOrder] = useState("newest");

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
                        IMPACT STORIES
                    </span>
                    <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
                        <span className="text-danger">Girls Inc.</span> is changing the
                        trajectory of girls’ lives.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 position-relative">
                    <img
                        src={IS}
                        alt="Girls Inc"
                        className="img-fluid rounded-start"
                        style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
                    />
                </div>
            </section>
            <br/>
            <br/>
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
                                <img src={card.image} className="card-img-top" style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} alt={card.title} />
                                <div className="card-body">
                                    <h6 className="card-title text-danger fw-bold">{card.name}</h6>
                                    <p className="card-text text-black">{card.quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container"><NewsletterSignup /></div>
        </>
    );
};

export default ImpactStories;
