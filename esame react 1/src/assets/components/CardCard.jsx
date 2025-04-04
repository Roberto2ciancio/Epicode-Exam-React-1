import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CardCard = ({ searchTerm }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=c5e72d07&s=${searchTerm}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCards(data.Search || []))
      .catch((error) => console.error("Errore nella fetch:", error));
  }, [searchTerm]);

  return (
    <Container>
      <Row>
        {cards.slice(0, 6).map((card, index) => (
          <Col key={index} md={2} sm={6} xs={12} className="mb-2">
            <Card className="h-50 bg-dark text-white border-light border">
              <Card.Img variant="top" src={card.Poster} alt={card.Title} />
              <Card.Body>
                <Card.Title>{card.Title || "Senza titolo"}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const App = () => {
  return (
    <div>
      <div>
        <h4 className="text-center">Trending Now</h4>
        <CardCard searchTerm="harry-potter" />
      </div>
      <div>
        <h4 className="text-center">Watch it Again</h4>
        <CardCard searchTerm="star-wars" />
      </div>
      <div>
        <h4 className="text-center">New Releases</h4>
        <CardCard searchTerm="batman" />
      </div>
    </div>
  );
};

export default App;
