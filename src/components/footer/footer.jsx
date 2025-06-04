import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/Final_logo.png';


function FooterComponent() {
  const history = useNavigate();
  return (
    <footer className="text-white text-center pb-2" style={{ backgroundColor: '#ED1849' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <img src={Logo} alt={'Logo'} style={{ width: '162px', height: '138px' }} />
            <br/>
            <br/>
            <div className="row mb-3">
              <div className="col-lg-12">
                <a href="https://www.facebook.com/girlsincofworcester" target="_blank" className="text-white mx-2"><FaFacebookF size={24} /></a>
                <a href="https://www.instagram.com/girlsincworcester/" target="_blank" className="text-white mx-2"><FaInstagram size={24} /></a>
                <a href="https://www.linkedin.com/company/girls-inc-of-worcester/" target="_blank" className="text-white mx-2"><FaLinkedinIn size={24} /></a>
                <a href="https://www.youtube.com/@girlsinc.ofworcester6433" target="_blank" className="text-white mx-2"><FaYoutube size={24} /></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none" style={{color:'#fff',fontSize:'16px',fontFamily:'Lato, sans-serif',fontWeight:'bold'}}>Contact Us</a></li>
              <br />
              <li><a onClick={() => { history("/careers") }} className="text-white text-decoration-none" style={{color:'#fff',fontSize:'16px',fontFamily:'Lato, sans-serif',fontWeight:'bold',cursor:'pointer'}}>Careers</a></li>
            </ul>
          </div>

          <div className="col-lg-4 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none" style={{color:'#fff',fontSize:'16px',fontFamily:'Lato, sans-serif',fontWeight:'bold'}}>Privacy Policy</a></li>
              <br />
              <li><a href="#" className="text-white text-decoration-none" style={{color:'#fff',fontSize:'16px',fontFamily:'Lato, sans-serif',fontWeight:'bold'}}>Code Of Conduct</a></li>
            </ul>
          </div>
        </div>
        <br />
        <br />


        <div className="row">
          <div className="col-lg-12">
            <p className="mb-0" style={{color:'#fff',fontSize:'16px',fontFamily:'Lato, sans-serif',fontWeight:'bold'}}>&copy; 2024 Girls Inc. of Worcester 125 Providence St, Worcester, MA 01604</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
