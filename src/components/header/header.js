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
              title="Who we are"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => { history("/whoweare") }}>Who we are</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/billofrights") }}>
                Our Bill of Rights
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/financials") }}>Our Financials</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/champions") }}>Our Champions</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { history("/history") }}>Our History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Partners</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: '#000000' }} onClick={() => { history("/whatwedo") }}>what we do</Nav.Link>
            <Nav.Link style={{ color: '#000000' }} onClick={() => { history("/outcomes") }}>
              Outcomes
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav.Link style={{ color: '#000000', marginRight: '15px' }} onClick={() => { history("/getinvolved") }}>
              Get Involved
            </Nav.Link>
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