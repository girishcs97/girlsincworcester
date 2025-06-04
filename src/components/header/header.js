import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';

function Header() {
  const history = useNavigate();
  return (
    <>
      {/* Top Red Bar */}
      <div style={{ backgroundColor: '#ED1849', padding: '0.5rem 2rem' }} className="d-flex justify-content-between align-items-center text-white">
        <div className="d-flex align-items-center gap-3">
          {/* Language Dropdown (Always English) */}
          <select
            className="form-select fw-bold rounded-pill border-2 px-3 py-1 notranslate"
            style={{ width: '200px', borderColor: '#fff' }}
            onChange={(e) => {
              const lang = e.target.value;
              const select = document.querySelector(".goog-te-combo");
              if (select) {
                select.value = lang;
                select.dispatchEvent(new Event("change"));
              }
            }}
          >
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
            <option value="zh-CN">Chinese (Simplified)</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="it">Italian</option>
          </select>


          {/* Translate Label with Hover Effect */}
          <span className="fw-semibold">
            Powered by{' '}
            <a
              href="https://translate.google.com/?sl=auto&tl=en&op=translate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none fw-bold translate-link"
              style={{ transition: 'color 0.3s' }}
            >
              Translate
            </a>
            <i className="bi bi-box-arrow-up-right ms-1"></i>
          </span>
        </div>

        {/* Right-side Links */}
        <div className="d-flex gap-4">
          <Nav.Link className="text-white text-decoration-underline fw-semibold" onClick={() => history('/resources')}>Resources Hub</Nav.Link>
          <Nav.Link className="text-white text-decoration-underline fw-semibold" onClick={() => history('/news')}>News</Nav.Link>
        </div>
      </div>
      <Navbar expand="lg" className="custom-navbar shadow-sm" sticky="top">
        <Container fluid>
          <Navbar.Brand className='search-btn' onClick={() => { history("/") }}>
            <img src={Logo} alt={'Logo'} style={{ width: '45px', height: '45px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <div className="mx-auto">
              <Nav className="justify-content-center align-items-center fw-bold">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Who We Are"

                >
                  <NavDropdown.Item onClick={() => { history("/whoweare") }}>Who We Are</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/billofrights") }}>Our Bill of Rights</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/financials") }}>Our Financials</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/champions") }}>Our Champions</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/history") }}>Our History</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Our Partners</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="What We Do"

                >
                  <NavDropdown.Item onClick={() => { history("/whatwedo") }}>What we do</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/programs") }}>Programs</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/events") }}>Events</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/whatwedo") }}>Our Mission</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/whatwedo") }}>The Girls Inc Experience</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/advocacyEducation") }}>Advocacy & Education</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Outcomes"

                >
                  <NavDropdown.Item onClick={() => { history("/outcomes") }}>Outcomes</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/alumnae") }}>Alumnae</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/impactstories") }}>Impact Stories</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/researchdata") }}>Research & Data</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Rentals"

                >
                  <NavDropdown.Item onClick={() => { history("/rentals") }}>Rentals</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Get Involved"
                  className='dropdown-menu-left'

                >
                  <NavDropdown.Item onClick={() => { history("/getinvolved") }}>Get Involved</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/becomeapartner") }}>Become a Partner</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/championspage") }}>Become a Champion</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/makeagift") }}>Make a Gift</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/volunteers") }}>Become a Volunteer</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/advocacyEducation") }}>Become an Advocate</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { history("/socialmedia") }}>Become a Social Media Ambassador</NavDropdown.Item>
                </NavDropdown>

                <Button className="donate-btn ms-3" onClick={() => { history("/donate") }}>DONATE</Button>

                <div className="search-icon ms-3">
                  <i className="bi bi-search" />
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;