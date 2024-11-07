import React from 'react';
import NewsLetter from '../../images/newsletter.png';
import './newslettersignup.css';

function NewsletterSignup() {
  return (
    <div className="container py-5">
      <div className="row align-items-center bg-danger text-white rounded-4 shadow-lg p-4" style={{ overflow: 'hidden' }}>
        
        {/* Text Section */}
        <div className="col-md-7 px-5">
          {/* Top Button */}
          <button className="btn btn-warning text-uppercase fw-bold mb-3" style={{ color: '#333' }}>
            Join the Movement
          </button>
          <br/>
          <br/>
          {/* Main Text */}
          <h3 className="fw-bold">Sign Up For The Girls Inc.<br/> Newsletter Today!</h3>
          {/* Sign Up Button */}
          <a href="#signup" className="btn btn-danger btn-lg mt-3 rounded-pill">
            Sign Up Now &rarr;
          </a>
        </div>

        {/* Image Section */}
        <div className="col-md-5 d-none d-md-block">
          <img src={NewsLetter} alt="Girls Inc" className="img-fluid" />
        </div>

      </div>
    </div>
  );
}

export default NewsletterSignup;
