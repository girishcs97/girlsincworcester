import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EventLogo from '../../images/eventlogo.jpg'
import IS1 from '../../images/impactstories1.jpg'
import IS2 from '../../images/impactstories2.jpeg'
import IS3 from '../../images/impactstories3.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";


const Events = () => {
    const [sortOrder, setSortOrder] = useState("newest");
    const impactStories = [
        {
            name: "Fuel Her Fire Auction Gala",
            quote: "Join Us for the 2025 Fuel Her Fire Auction Gala! We’re excited to announce the return of our signature event, the Fuel Her Fire Auction…",
            image: IS1,
        },
        {
            name: "Champions for Girls Breakfast",
            quote: "A Celebration of Girls Inc. of New Hampshire supporters, donors, volunteers, and the overall success of Girls Inc. NH programs. A separate breakfast celebration will…",
            image: IS2,
        },
        {
            name: "Granite State Golf Challenge",
            quote: "Join us on September 8, 2025, for the Girls Inc. Granite State Golf Challenge at Nashua Country Club’s Wayne Stiles golf course. Your participation supports our mission to empower underserved girls aged 5 to…",
            image: IS3,
        },
    ];
    const sortedStories = [...impactStories];
    if (sortOrder === "oldest") {
        sortedStories.reverse();
    }
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Events</span>
                    <h1 className="fw-bold">
                    Our annual events celebrate <span className="text-danger">remarkable leaders</span> who are helping to create a better future for girls.
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={EventLogo}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container text-center mt-5">
                <div className="mb-3">
                    <label className="fw-bold">Filter By Published Date</label>
                    <select className="form-select w-auto d-inline-block ms-2" onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="newest">Newest To Oldest</option>
                        <option value="oldest">Oldest To Newest</option>
                    </select>
                </div>

                <div className="row mt-4">
                    {sortedStories.map((story, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card shadow-sm border-0 rounded">
                                <img src={story.image} alt={story.name} className="card-img-top rounded-top" />
                                <div className="card-body">
                                    <h5 className="text-danger">{story.name}</h5>
                                    <p className="text-muted">"{story.quote}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NewsletterSignup/>
        </>
    );
};

export default Events;
