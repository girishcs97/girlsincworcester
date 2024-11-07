import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function FooterComponent() {
  return (
    <footer className="bg-danger text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <h3 className="text-uppercase fw-bold">girls inc.</h3>
            <p>of Worcester</p>
          </div>

          <div className="col-lg-4 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <br/>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
            </ul>
          </div>

          <div className="col-lg-4 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <br/>
              <li><a href="#" className="text-white text-decoration-none">Code Of Conduct</a></li>
            </ul>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row mb-3">
          <div className="col-lg-12">
            <a href="#" className="text-white mx-2"><FaFacebookF size={24} /></a>
            <a href="#" className="text-white mx-2"><FaInstagram size={24} /></a>
            <a href="#" className="text-white mx-2"><FaLinkedinIn size={24} /></a>
            <a href="#" className="text-white mx-2"><FaYoutube size={24} /></a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <p className="mb-0">&copy; 2024 Girls Inc. of Worcester 125 Providence St, Worcester, MA 01604</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
