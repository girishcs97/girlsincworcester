import React from 'react';
import NewsLetter from '../../images/newsletterlogo.png';
import './newslettersignup.css';

function NewsletterSignup() {
  return (
    <div className="container-p py-5">
      <img src={NewsLetter} alt="Girls Inc" className="img-fluid" />
      <div className='top-left'>
        <div className='news-title'>
        <h2>Join the Movement</h2>
        <p>Sign Up For The Girls Inc.<br/>
        Newsletter Today!</p>
        <a class="signup-btn" href="#nine-modal">Sign Up Now</a>
      </div>
      </div>

    </div>
  );
}

export default NewsletterSignup;
