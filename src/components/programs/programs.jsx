import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgramLogo from '../../images/program_logo.jpg'
import IS1 from '../../images/impactstories1.jpg'
import IS2 from '../../images/impactstories2.jpeg'
import IS3 from '../../images/impactstories3.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";

const programs = [
    { name: "Fuel Her Fire Nutrition Program" },
    { name: "BOLD Futures Mentoring" },
    { name: "Young Women's Leadership" },
    { name: "Mind + Body" },
];

const Programs = () => {
    const impactStories = [
        {
            name: "Summer Camp",
            quote: "Girls Inc. Summer Camp provides your child with an unforgettable summer vacation. Weekly field trips and special events take them on a journey of fun….",
            image: IS1,
        },
        {
            name: "Young Women’s Leadership",
            quote: "Young Women’s Leadership (YWL) is not like other summer camps! YWL helps girls see themselves as Strong, Smart, Bold leaders! Camp is eight weeks beginning…",
            image: IS2,
        },
        {
            name: "After School Program",
            quote: "Our After School Program is available Monday through Friday  after school until 6:00p.m. when school is in session at our Manchester and Nashua centers. Members…",
            image: IS3,
        },
    ];
    const [sortOrder, setSortOrder] = useState("newest");

    const sortedStories = [...impactStories];
    if (sortOrder === "oldest") {
        sortedStories.reverse();
    }
    return (
        <>
            <div className="container-fluid bg-light p-5 d-flex align-items-center justify-content-between">
                <div className="text-start">
                    <span className="badge bg-warning text-dark mb-2">Programs</span>
                    <h1 className="fw-bold">
                        Research-based informal education programs that encourage girls to take risks and master physical, intellectual and emotional challenges.
                    </h1>
                </div>
                <div className="image-section">
                    <img
                        src={ProgramLogo}
                        alt="Girls Inc group"
                        className="img-fluid rounded-start"
                        style={{ maxWidth: "600px" }}
                    />
                </div>
            </div>
            <div className="container text-center mt-5">
                <h2 className="fw-bold">
                    On any given day in various cities across the state,{" "}
                    <span className="text-danger">Girls Inc. of Worcester</span> is implementing a rich variety of programming.
                </h2>
                <p className="fs-5">
                    Girls Inc. operates two year-round centers in Nashua and Manchester, providing afterschool, summer camp, and vacation week programming.
                </p>

                <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
                    <button className="btn btn-danger text-white px-4 py-2 fw-bold rounded-pill">
                        Research-Based Programs
                    </button>
                    {programs.map((program, index) => (
                        <button key={index} className="btn btn-outline-danger px-4 py-2 fw-bold rounded-pill">
                            {program.name}
                        </button>
                    ))}
                </div>

                <p className="mt-4 fs-7">
                    Centers offer a variety of{" "}
                    <span className="text-danger fw-bold">Girls Inc. research-based programs</span> on topics such as math and science education, pregnancy and drug abuse prevention, media literacy, economic literacy, adolescent health, violence prevention, careers and leadership, and sports participation.
                </p>
            </div>
            <div className="container text-center mt-5">
                <h2 className="fw-bold">Impact Stories</h2>

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

export default Programs;
