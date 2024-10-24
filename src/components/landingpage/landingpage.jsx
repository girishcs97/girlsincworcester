import React from 'react';
import './landingpage.css'; // Create this for custom styles
import FrontImage from '../../images/front-page.webp'
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 text-section">
            <h1 className="title">Inspiring all Girls to be Strong, Smart and Bold</h1>
            <button className="btn btn-primary get-started-btn search-btn">Get Involved</button>
            <button className="btn btn-primary get-started-btn">Watch Video</button>
          </div>
          <div className="col-md-6 image-section">
            <img src={FrontImage} alt="Office" className="img-fluid office-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
