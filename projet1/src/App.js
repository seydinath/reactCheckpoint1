import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Navbar, Container, Card, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      {/* React Fragment allows grouping elements without adding extra nodes to the DOM */}
      <div className="App">
        {/* Navbar */}
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React Shop</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="my-4">
          <h1 className="text-center" style={{ fontWeight: 700, letterSpacing: "2px" }}>
            Welcome to the Product Gallery
          </h1>

          {/* Cards */}
          <Row className="mt-4 justify-content-center">
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" />
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Card.Text>
                    This is a description for product 1. Stylish and modern!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" />
                <Card.Body>
                  <Card.Title>Product 2</Card.Title>
                  <Card.Text>
                    This is a description for product 2. Perfect for your needs!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca" />
                <Card.Body>
                  <Card.Title>Product 3</Card.Title>
                  <Card.Text>
                    This is a description for product 3. Best seller!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;