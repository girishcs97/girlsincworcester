import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Img from '../../images/camp.JPG'
import MultiPHall from '../../images/MultipurposeHall.jpg'
import Pool from '../../images/Pool.HEIC'

const spaces = [
  {
    name: 'Multipurpose Hall',
    capacity: 'Up to 250 guests',
    rates: 'Starting at $600',
    description: 'A bright, welcoming space with natural light and a flexible layout. Perfect for corporate gatherings, workshops, group activities, and birthday parties.',
    image: MultiPHall
  },
  {
    name: 'Conference Room',
    capacity: '50 guests',
    rates: '$150 per hour',
    description: 'State-of-the-art space with modern tech. Ideal for workshops and collaborative projects.',
    image: Img
  },
  {
    name: 'Meeting Room',
    capacity: '10 guests',
    rates: '$100 per hour',
    description: 'Private space for small meetings and presentations, equipped with a smart TV.',
    image: Img
  },
  {
    name: 'Breakout / Individual Rooms',
    capacity: '20 guests',
    rates: '$75 per hour (min 2 hours)',
    description: 'Cozy rooms with collaborative tables and reading nooks for study or team meetings.',
    image: Img
  },
  {
    name: 'Gymnasium / Basketball Court',
    capacity: '40 guests',
    rates: '$85 per hour (min 2 hours)',
    description: 'Polished wooden floors for sports, fitness events, or social gatherings.',
    image: Img
  },
  {
    name: 'Pool',
    capacity: '50 guests',
    rates: '$125 per hour',
    description: 'Temperature-controlled pool with lifeguard included for up to 25 guests.',
    image: Pool
  },
  {
    name: 'Camp Kinneywood',
    capacity: '200 guests',
    rates: '$800 flat rate (8 hours)',
    description: 'Serene lakeside setting for adventure and fellowship.',
    image: Img
  }
];

function Rentals() {
  return (
    <Container className="my-5">
      <header className="text-center mb-5">
        <h2 className="">Host Your Next Event at Girls Inc. of Worcester</h2>
        <p className="lead">Discover versatile spaces perfect for every occasion — parties, retreats, conferences & more!</p>
        <a href="https://forms.office.com/r/gXfFXKJJfm" className="btn btn-primary">Reserve Now</a>
      </header>

      <Row>
        {spaces.map((space, idx) => (
          <Col md={6} lg={4} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={space.image} />
              <Card.Body>
                <Card.Title>{space.name}</Card.Title>
                <Card.Text>
                  <strong>Capacity:</strong> {space.capacity} <br />
                  <strong>Rates:</strong> {space.rates} <br />
                  {space.description}
                </Card.Text>
                <Button variant="outline-primary" href="https://forms.office.com/r/gXfFXKJJfm" target="_blank">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <footer className="text-center mt-5">
        <p>Participant families receive 50% off bookings</p>
        <p>Non-profit organizations enjoy a 25% discount on all rentals.</p>
        <p>
          Contact us at <a href="mailto:ldankwa@girlsincworcester.org">ldankwa@girlsincworcester.org</a> or call 508-755-6455.
        </p>
      </footer>
    </Container>
  );
}

export default Rentals;
