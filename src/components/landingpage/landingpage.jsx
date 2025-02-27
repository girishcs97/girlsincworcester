import React from 'react';
import './landingpage.css'; // Create this for custom styles
import FrontImage from '../../images/front-page.webp'
const LandingPage = () => {
  return (<>
    <section className="py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ backgroundColor: '#f4f4ef' }}>
      {/* Text Section */}
      <div className="col-lg-6 text-center text-lg-start" style={{ marginLeft: '30px' }}>
        <span className="badge text-dark px-3 text-uppercase py-1" style={{ backgroundColor: "#eeff41" }} >
          IT STARTS WITH GIRLS
        </span>
        <h1 className="mt-4 fw-bold" style={{ fontSize: '36px' }}>
          We are guided by the <br />vision of <span className="text-danger">powerful girls</span> in <br /> an equitable society.
        </h1>
        <br/>
        <div className="button-container">
          {/* Filled Button */}
          <button className="filled-button">
            <span>Get Involved</span>
            <span className="arrow">&rarr;</span>
          </button>
          {/* Outlined Button */}
          <button className="outlined-button">
            <span className="play-icon">&#9654;</span>
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="col-md-6 image-section">
        <img src={FrontImage} alt="Office" className="img-fluid office-image" />
      </div>
    </section>
  </>
  );
};

export default LandingPage;
