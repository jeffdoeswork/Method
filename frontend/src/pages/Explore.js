import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const LargePillCard = ({ title, bgColor }) => {
  const cardStyle = {
    borderRadius: '50px',
    padding: '20px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  };

  const titleStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  };



  return (
    <Card style={cardStyle}>
      <Card.Title style={titleStyle}>{title}</Card.Title>
    </Card>
  );
};

const Explore = () => {
  const cardData = [
    { title: '3D Printing', bgColor: 'red' },
    { title: 'Space Exploration', bgColor: 'purple' },
    { title: 'Blockchain', bgColor: 'darkgoldenrod' },
    { title: 'Robots', bgColor: 'silver' },
    { title: 'Programming', bgColor: 'blue' },
    { title: 'Health', bgColor: 'green' },
  ];

  
  const headerStyle = {
    fontSize: '80px',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  };

  return (
    <div className="container mt-5">
    <Row>
      <h1 className="text-center mb-4" style={headerStyle}>Explore Different Subject Matters</h1>
    </Row>
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <LargePillCard title={card.title} bgColor={card.bgColor} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Explore;
