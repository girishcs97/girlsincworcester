import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Burkehaven from '../../images/burkheaven.jpg';
import Darmouth from '../../images/dartmouth.png';
import Fidelity from '../../images/fidelity.png';
import UnitedWay from '../../images/unitedway.png';
import Harvard from '../../images/hardvard.png';
import NewsletterSignup from '../newslettersignup/newslettersignup';


function PartnersSection() {
  return (
    <div style={{ backgroundColor: 'white', padding: '50px 0', textAlign: 'center' }}>
      <Container>
        <Row>
          <Col>
            <div style={{ display: 'inline-block', backgroundColor: '#eeff41', padding: '5px 15px', borderRadius: '6px', marginBottom: '20px' }}>
              <strong>OUR PARTNERS</strong>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>
              Our <span style={{ color: '#f03a47' }}>partners</span> are committed to increasing access and opportunities for all girls.
            </h2>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }}>
          <Col>
            <Button variant="danger" href="#" style={{ padding: '10px 20px', borderRadius: '30px' }}>
              Our Partners
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ marginTop: '50px' }}>
          <Col xs={6} md={2}>
            <img src={Burkehaven} alt="Burkehaven Family Foundation" className="img-fluid" />
          </Col>
          <Col xs={6} md={2}>
            <img src={Darmouth} alt="Dartmouth Health Children's" className="img-fluid" />
          </Col>
          <Col xs={6} md={2}>
            <img src={Harvard} alt="Harvard Pilgrim Health Care" className="img-fluid" />
          </Col>
          <Col xs={6} md={2}>
            <img src={Fidelity} alt="Fidelity Investments" className="img-fluid" />
          </Col>
          <Col xs={6} md={2}>
            <img src={UnitedWay} alt="United Way" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <div className='container'>
        <NewsletterSignup />
      </div>
    </div>
  );
}

export default PartnersSection;
