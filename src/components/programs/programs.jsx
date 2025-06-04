import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgramLogo from '../../images/program_logo.jpg'
import IS1 from '../../images/impactstories1.jpg'
import IS2 from '../../images/impactstories2.jpeg'
import IS3 from '../../images/impactstories3.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";

const programs = [
    {
        title: "GPS",
        image: IS1
    },
    {
        title: "Girls Unified",
        image: IS2
    },
    {
        title: "Youth Connect",
        image: IS3
    },
    {
        title: "After School",
        image: IS1
    },
    {
        title: "Basketball League",
        image: IS1
    },
    {
        title: "Swim Lessons",
        image: IS1
    },
    {
        title: "Summer Camp",
        image: IS1
    },
    {
        title: "Vacation Week",
        image: IS1
    },
    {
        title: "Eureka! Worcester",
        image: IS1
    },
    {
        title: "Eureka! JV Worcester",
        image: IS1
    },
    {
        title: "Eureka! Metrowest",
        image: IS1
    },
    {
        title: "Wellness & Equity",
        image: IS1
    },
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
                    <span className="badge text-dark mb-2" style={{backgroundColor:'#eeff41'}}>Programs</span>
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
            <div className="container py-5">
                <h4 className="text-center mb-4">
                    <span className="badge text-dark px-4 py-2" style={{backgroundColor:'#eeff41'}}>OUR PROGRAMS</span>
                </h4>
                <div className="row justify-content-center mt-2">
                    {programs.map((program, index) => (
                        <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
                            <div className="card shadow rounded-4 border-0 text-center">
                                <img
                                    src={program.image}
                                    className="card-img-top rounded-top-4"
                                    alt={program.title}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{program.title}</h5>
                                    <br/>
                                    <a href="#" className="btn btn-danger rounded-pill px-4">
                                        Learn more. <span>&rarr;</span>
                                    </a>
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

export default Programs;
