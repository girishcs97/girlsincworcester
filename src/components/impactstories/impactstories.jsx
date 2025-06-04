import React, { useState } from "react";
import IS from '../../images/impactstories.jpeg'
import IS1 from '../../images/impactstories1.jpg'
import IS2 from '../../images/impactstories2.jpeg'
import IS3 from '../../images/impactstories3.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";

export const impactStories = [
    {
        id: "ria-padayachee",
        name: "Ria Padayachee",
        image: IS1,
        quote:"I can’t imagine what would have happened without Girls Inc. in my life and I am deeply grateful for everything it gave to me.",
        description: [
            "“When my acceptance letter to Girls Inc. of Worcester’s five-year Eureka! program arrived in the mail during the summer of my 8th grade, that was the day my life changed forever.",
            "Prior to the program, I was just a little girl surrounded by a new, fast-paced world in which I was unsure how to leave my mark. I did not know what I wanted to be and was scared I would drown in the vast ocean of society that puts extra pressure on people like me.",
            "As a girl of color and daughter of immigrants living in a predominantly white country with interests in male-dominated fields, I had no idea how to keep up.",
            "Now five years later, I am thrilled to engage myself in this scholarship opportunity and illustrate the progress I’ve made toward the young woman I have finally become. I no longer feel as though I will fall beneath the water—instead, Girls Inc. of Worcester has provided me with the raft that enabled me to float.”"
        ]
    },
    {
        id: "brielle-ordaz",
        name: "Brielle Ordaz",
        quote:"I can’t imagine what would have happened without Girls Inc. in my life and I am deeply grateful for everything it gave to me.",
        image: IS2,
        description: [
            "Over the course of the 2023–2024 school year, this participant made significant strides in her emotional and social development.",
            "Her newfound self-awareness and self-management skills helped her overcome challenges that arose and build self-confidence.",
            "She actively participated in nature-based programming including our Safari Adventure curriculum.",
            "This participant was exposed to various activities that strengthened her knowledge about nature. She took on leadership roles in group activities and formed meaningful bonds with her peers and staff members."
        ]
    },
    {
        id: "elyna-peluyera",
        name: "Elyna Peluyera",
        quote:"I can’t imagine what would have happened without Girls Inc. in my life and I am deeply grateful for everything it gave to me.",
        image: IS3,
        description: [
            "Elyna Peluyera is an inspiring senior at Abby Kelly Foster Charter School, and she is in her fifth and final year of the Eureka program.",
            "As one of the 2024 POSSE scholarship recipients, Elyna credits her experiences with Eureka as the key to her preparedness for this achievement.",
            "Her journey with Eureka! has been pivotal, shaping her confidence and skills.",
            "In addition to her academic success, Elyna is also a lifeguard at Girls Inc. of Worcester, further demonstrating her commitment to leadership and community involvement.",
            "Her story reflects the powerful impact of both education and extracurricular engagement in shaping a bright future."
        ]
    }
];
const ImpactStories = () => {


    const [sortOrder, setSortOrder] = useState("newest");

    const sortedStories = [...impactStories];
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
            <br />
            <br />
            <div className="mb-3 text-left">
                <label className="fw-bold">Filter By Published Date</label>
                <select className="form-select w-auto d-inline-block ms-2" onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="newest">Newest To Oldest</option>
                    <option value="oldest">Oldest To Newest</option>
                </select>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    {impactStories.map((story, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                            <div className="card h-100 shadow-sm rounded-4 overflow-hidden border-0">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="card-img-top"
                                    style={{ height: "260px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <span className="badge bg-warning text-dark fw-bold px-3 py-2 mb-2">
                                        IMPACT STORIES
                                    </span>
                                    <h6 className="fw-bold text-danger mb-2">Meet {story.name}</h6>
                                    <p className="text-dark fw-light">“{story.quote}”</p>
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
