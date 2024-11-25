import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo-white.svg';

function Header() {
  const history = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='search-btn' onClick={() => { history("/") }}>
            <img src={Logo} alt={'Logo'}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:'#000000'}} onClick={() => { history("/whoweare") }}>Who we are</Nav.Link>
            <Nav.Link style={{color:'#000000'}} onClick={() => { history("/whatwedo") }}>what we do</Nav.Link>
            <Nav.Link style={{color:'#000000'}} onClick={() => { history("/outcomes") }}>
              Outcomes
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