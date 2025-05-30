import React from "react";
import Player from "./player";
import players from "./players";
import { Container, Row, Col } from "react-bootstrap";

function PlayersList() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4" style={{ color: "#6366f1", fontWeight: 700 }}>Senegalese Players</h2>
      <Row
        className="g-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "2rem" // Add space between cards
        }}
      >
        {players.map((player, idx) => (
          <Col
            key={idx}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
            style={{ display: "flex" }}
          >
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;