import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/girlsincworcesterlogo.png';

function Header() {
  const history = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='search-btn' onClick={() => { history("/") }}>
          <img src={Logo} alt={'Logo'} style={{ width: '45px', height: '45px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Who We Are"
              menuVariant="dark"
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
              title="Who We Do"
              menuVariant="dark"
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
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => { history("/outcomes") }}>Outcomes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/alumnae") }}>Alumnae</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/impactstories") }}>Impact Stories</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/researchdata") }}>Research & Data</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Get Involved"
              className='dropdown-menu-left'
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => { history("/getinvolved") }}>Get Involved</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/becomeapartner") }}>Become a Partner</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/championspage") }}>Become a Champion</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/makeagift") }}>Make a Gift</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/volunteers") }}>Become a Volunteer</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/advocacyEducation") }}>Become an Advocate</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/socialmedia") }}>Become a Social Media Ambassador</NavDropdown.Item>
            </NavDropdown>  
            <Nav.Link style={{ color: '#000000' }} onClick={() => { history("/") }}>
              Donate
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;