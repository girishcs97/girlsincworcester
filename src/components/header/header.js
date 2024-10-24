import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import Logo from '../../images/logo-white.svg'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='search-btn'>
            <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:'#000000'}}>About Us</Nav.Link>
            <Nav.Link href="#action2" style={{color:'#000000'}}>News & Events</Nav.Link>
            <Nav.Link href="#" style={{color:'#000000'}}>
              Programs
            </Nav.Link>
            <Nav.Link href="#" style={{color:'#000000'}}>
              Support & Volunteer
            </Nav.Link>
            <Nav.Link href="#" style={{color:'#000000'}}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='search-btn'>Search</Button>
            <Button variant='outline' className=''>Donate</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;