import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgramLogo from '../../images/program_logo.jpg'
import IS1 from '../../images/impactstories1.jpg'
import IS2 from '../../images/impactstories2.jpeg'
import IS3 from '../../images/impactstories3.jpg'
import NewsletterSignup from "../newslettersignup/newslettersignup";
import { Link } from "react-router-dom";

export const programs = [
    {
        id: "gps",
        title: "GPS",
        image: IS1,
        description: [
            "GPS is a collaborative program led by the YWCA of Central Massachusetts in partnership with Girls Inc., offered in Worcester Public Schools and Abby Kelley Foster Charter School.",
            "Staff from both organizations facilitate the program during the middle school enrichment period.",
            "The program focuses on preventing domestic violence by teaching students about healthy communication, building healthy relationships, stress management, conflict resolution, resisting peer and media pressure, bullying prevention, and understanding sexual harassment and relationship violence.",
            "It also provides guidance on how to respond when facing these challenges personally or when witnessing them in friends or loved ones."
        ]
    },
    {
        id: "girls-unified",
        title: "Girls Unified",
        image: IS1,
        description: [
            "This joint program with Knox Trail Middle School in the Spencer-East Brookfield School District runs once a week after school for two hours, from early October through June.",
            "The program concludes with a full-day field trip to the Girls Inc. location in Worcester.",
            "Focused on healthy living and violence prevention, the program covers topics such as team building, healthy communication, building healthy relationships, cooking (including knife safety), stress management, mental health, conflict resolution, resisting peer and media pressure, bullying and sexual harassment prevention, social media safety, and American Red Cross Babysitter training.",
            "Staff work closely with the school team to adapt the curriculum to best address the specific needs of the school community."
        ]
    },
    {
        id: "youth-connect",
        title: "Youth Connect",
        image: IS1,
        description: [
            "In partnership with youth-serving organizations in Worcester, including the Boys & Girls Club, YWCA, YMCA, and Friendly House, Girls Inc. offers free after-school and summer programs for girls aged 11–15.",
            "These agencies are open from 6 pm to 9 pm on various evenings, providing a safe and engaging space for girls.",
            "Participants can use buses to travel between locations and explore different programs of interest.",
            "Girls Inc. offers gender-specific programming and open swim opportunities tailored to participants' needs."
        ]
    },
    {
        id: "after-school",
        title: "After School",
        image: IS1,
        description: [
            "Our after-school programs provide a variety of activities including swimming, gym games, outdoor play, and homework help.",
            "Participants can choose from a wide range of clubs such as arts and crafts, CEO advisory council, STEM, sports, cooking, health and beauty, entrepreneurship, and more.",
            "Each day, participants select two clubs and spend an hour in each.",
            "Every four weeks, they can switch club selections to try new activities on different days."
        ]
    },
    {
        id: "basketball-league",
        title: "Basketball League",
        image: IS1,
        description: [
            "Girls Inc. of Worcester offers a basketball league that participants can try out for.",
            "Practices are held once a week, and players are placed on teams based on their age group.",
            "The total program cost is $150, with a $75 registration fee."
        ]
    },
    {
        id: "swim-lessons",
        title: "Swim Lessons",
        image: IS1,
        description: [
            "Girls Inc. of Worcester offers swimming lessons based on American Red Cross standards.",
            "The program cost is $150 per child, with $75 due upfront and $75 due on the first day of lessons.",
            "Participants can bring siblings (including brothers) aged 5–18 to learn to swim for free."
        ]
    },
    {
        id: "summer-camp",
        title: "Summer Camp",
        image: IS1,
        description: [
            "The Summer Camp program runs for six weeks and is open to girls ages 5–12.",
            "To attend Camp Kinneywood, participants must be enrolled in kindergarten.",
            "At the Providence Street location, children must be entering kindergarten.",
            "Parents can choose the location for their child on a weekly basis."
        ]
    },
    {
        id: "vacation-week",
        title: "Vacation Week",
        image: IS1,
        description: [
            "Vacation Weeks are held at the Providence Street location and are open to girls in grades K–12.",
            "The program provides a safe and engaging space during school vacations.",
            "Social Emotional Learning is incorporated into daily activities.",
            "February vacation usually focuses on Black History Month, offering fun and educational experiences."
        ]
    },
    {
        id: "eureka-worcester",
        title: "Eureka! Worcester",
        image: IS1,
        description: [
            "Eureka! is a year-round, five-year STEM-intensive program for girls in grades 8–12.",
            "The program builds confidence and helps participants discover leadership and academic opportunities in STEM.",
            "Monthly cohort meetings focus on inclusivity in STEM, leadership, and life skills for girls ages 12–18."
        ]
    },
    {
        id: "eureka-jv",
        title: "Eureka! JV Worcester",
        image: IS1,
        description: [
            "Eureka! JV is for girls in grades 5–7, offering STEM, leadership, and wellness activities.",
            "Monthly cohort meetings for ages 9–12 provide hands-on STEM experiences.",
            "It serves as a pathway to the five-year Eureka! model by sparking early interest in STEM careers."
        ]
    },
    {
        id: "eureka-metrowest",
        title: "Eureka! Metrowest",
        image: IS1,
        description: [
            "Eureka! Metrowest is a five-year, STEM-intensive program for 8th–10th grade girls.",
            "It serves Ashland, Framingham, Hopkinton, Marlborough, Natick, and Wayland, and will expand to include grades 11–12 in Fall 2026.",
            "Cohorts meet monthly at The McAuliffe Center and The Pelham Lifelong Learning Center.",
            "A JV cohort meets at Boys and Girls Club MetroWest, and three in-school cohorts will launch in Framingham middle schools by January 2025."
        ]
    },
    {
        id: "wellness-equity",
        title: "Wellness & Equity",
        image: IS1,
        description: [
            "We offer 1:1 support for staff and participants, group workshops, and staff training.",
            "The department leads family engagement events and implements restorative justice practices.",
            "We focus on behavior management through an equity lens and oversee the organization's overall wellbeing.",
            "Our goal is to maintain a supportive, inclusive environment for all."
        ]
    }
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
                    <span className="badge text-dark mb-2" style={{ backgroundColor: '#eeff41' }}>Programs</span>
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
                    <span className="badge text-dark px-4 py-2" style={{ backgroundColor: '#eeff41' }}>OUR PROGRAMS</span>
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
                                    <br />
                                    <Link to={`/programs/${program.id}`} className="btn btn-danger rounded-pill">
                                        Learn more &rarr;
                                    </Link>
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
