import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Img from '../../images/camp.JPG'
import MultiPHall from '../../images/MultipurposeHall.jpg'
import Pool from '../../images/Pool.jpg'
import Gym from '../../images/Gym.jpg'
import Breakout from '../../images/BreakoutRoom.jpg'
import Conference from '../../images/conference.jpg'
import Meeting from '../../images/meeting.jpg'
import './rentals.css';

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
    image: Conference
  },
  {
    name: 'Meeting Room',
    capacity: '10 guests',
    rates: '$100 per hour',
    description: 'Private space for small meetings and presentations, equipped with a smart TV.',
    image: Meeting
  },
  {
    name: 'Breakout / Individual Rooms',
    capacity: '20 guests',
    rates: '$75 per hour (min 2 hours)',
    description: 'Cozy rooms with collaborative tables and reading nooks for study or team meetings.',
    image: Breakout
  },
  {
    name: 'Gymnasium / Basketball Court',
    capacity: '40 guests',
    rates: '$85 per hour (min 2 hours)',
    description: 'Polished wooden floors for sports, fitness events, or social gatherings.',
    image: Gym
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
      <div className="video-container">
        <video autoPlay muted loop className="bg-video">
          <source src="../../images/roomrent.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="text-white display-4 fw-bold">Host Your Next Event at Girls Inc. of Worcester</h1>
          <p className="text-white fs-5">Discover versatile spaces perfect for every occasion — parties, retreats, conferences & more!</p>
          <a href="https://forms.office.com/r/gXfFXKJJfm" className="btn btn-primary">Reserve Now</a>
        </div>
      </div>

      <Row>
        {spaces.map((space, idx) => (
          <Col md={6} lg={4} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={space.image} height={'277px'} />
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
