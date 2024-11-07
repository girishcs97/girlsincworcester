import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Outcome from '../../images/outcome.jpg'

const OutcomeSection = () => {
    const cardStyle = {
        borderRadius: '15px',
        backgroundColor: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '8px 8px 0px 0px #eeff41, 0px 4px 30px 0px rgba(0, 0, 0, .2)',
    };
    return (
        <>
            <div style={{ backgroundColor: '#f03a47', padding: '50px 0', color: 'white' }}>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <div style={{ marginBottom: '20px', backgroundColor: '#fcec00', color: '#333', padding: '5px 10px', display: 'inline-block', fontWeight: 'bold' }}>
                                OUR OUTCOMES
                            </div>
                            <h2 style={{ fontWeight: 'bold' }}>
                                We help girls gain the knowledge and skills to effect{' '}
                                <span style={{ color: '#fcec00' }}>positive change</span> in their lives.
                            </h2>
                            <h2 style={{ fontWeight: 'bold' }}>
                                They become leaders who will change the world.
                            </h2>
                            <Button variant="light" style={{ marginTop: '30px', fontWeight: 'bold' }}>
                                See Our Outcomes →
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: '#f03a47', padding: '50px 0' }}>
                <Container>
                    <Row>
                        {/* Card 1 */}
                        <Col md={4} className="d-flex">
                            <Card style={cardStyle} className="w-100 text-center">
                                <Card.Body>
                                    <div style={{ backgroundColor: '#f03a47', color: 'white', padding: '5px 10px', display: 'inline-block', borderRadius: '5px', marginBottom: '20px' }}>
                                        <strong>STRONG & HEALTHY</strong>
                                    </div>
                                    <Card.Title style={{ fontSize: '3rem', color: '#f03a47', fontWeight: 'bold' }}>89%</Card.Title>
                                    <Card.Text>Of girls say they've been physically active in the past week.</Card.Text>
                                    <img src={Outcome} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height:'100px' }} />
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Card 2 */}
                        <Col md={4} className="d-flex">
                            <Card style={cardStyle} className="w-100 text-center">
                                <Card.Body>
                                    <div style={{ backgroundColor: '#fca311', color: 'white', padding: '5px 10px', display: 'inline-block', borderRadius: '5px', marginBottom: '20px' }}>
                                        <strong>SMART & EDUCATED</strong>
                                    </div>
                                    <Card.Title style={{ fontSize: '3rem', color: '#f03a47', fontWeight: 'bold' }}>90%</Card.Title>
                                    <Card.Text>Of girls believe they will graduate from college.</Card.Text>
                                    <img src={Outcome} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height:'100px' }} />
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Card 3 */}
                        <Col md={4} className="d-flex">
                            <Card style={cardStyle} className="w-100 text-center">
                                <Card.Body>
                                    <div style={{ backgroundColor: '#fcec00', color: 'white', padding: '5px 10px', display: 'inline-block', borderRadius: '5px', marginBottom: '20px' }}>
                                        <strong>BOLD & INDEPENDENT</strong>
                                    </div>
                                    <Card.Title style={{ fontSize: '3rem', color: '#f03a47', fontWeight: 'bold' }}>83%</Card.Title>
                                    <Card.Text>Of girls say they can use what they know to solve “real-life” problems in their communities.</Card.Text>
                                    <img src={Outcome} alt="Girl" className="rounded-circle" style={{ width: '100px', marginTop: '20px', height:'100px' }} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="text-center" style={{ marginTop: '60px', color: 'white', fontSize: '0.9rem' }}>
                        <p>
                            Statistics sourced from the 2023 Girls Inc. Strong, Smart, and Bold Outcomes Survey, reflecting national data.
                        </p>
                    </div>
                </Container>
            </div>
            <br/>
            <br/>
        </>
    )
}
export default OutcomeSection