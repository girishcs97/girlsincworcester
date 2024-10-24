import React from "react";
import Mission1 from '../../images/Mission1.jpg'
import Mission2 from '../../images/Mission2.jpg'
import Mission3 from '../../images/Mission3.jpg'

function Mission() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Side Images (Column for Desktop, Stack for Mobile) */}
        <div className="col-md-6 col-12">
          <div className="row mb-4">
            <div className="col-12">
              <img
                src={Mission1} // Image 1
                alt="Student working"
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src={Mission2} // Image 2
                alt="Student smiling"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-6">
              <img
                src={Mission3} // Image 3
                alt="Students studying"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-md-6 col-12 d-flex flex-column mt-4 text-align-justify">
          <h1 className="title" style={{marginTop:'60px'}}>Our mission</h1>
          <p className="mt-2">
            After 100 years, Girls Inc. of Worcester continues to inspire all girls to be strong (healthy), smart (educated), and bold (independent).  We put our mission into practice through the Girls Inc. Experience- consisting of the people, place and programming that, together, empower girls to succeed.  As the oldest and only facility-based, girl-centered organization in Central Massachusetts, the Girls Inc. Experience is what makes us unique among organizations serving youth.
            <br /><br/>
            Girls Inc. provides more than 1,000 girls in Greater Worcester with life-changing experiences and real solutions to the unique challenges girls face.  By offering researched-based programming, girls learn to set and achieve goals, overcome obstacles, resist peer pressure, see college as attainable, and explore nontraditional fields such as STEM (science, technology, engineering, and math).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
