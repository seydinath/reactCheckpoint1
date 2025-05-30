import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const [flipped, setFlipped] = useState(false);
  const [like, setLike] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);
  const handleLike = () => setLike((prev) => !prev);

  return (
    <div
      style={{
        perspective: "1200px",
        width: "19rem",
        margin: "auto"
      }}
    >
      <div
        style={{
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "410px",
          transform: flipped ? "rotateY(180deg)" : "none"
        }}
      >
        {/* Front Side */}
        <Card
          className="m-2 shadow"
          style={{
            width: "19rem",
            borderRadius: "1.5rem",
            overflow: "hidden",
            background: "linear-gradient(135deg, #e0e7ff 60%, #f1f5f9 100%)",
            border: "none",
            boxShadow: "0 6px 24px 0 rgba(99,102,241,0.13)",
            position: "absolute",
            top: 0,
            left: 0,
            backfaceVisibility: "hidden",
            zIndex: 2
          }}
        >
          <Card.Img
            variant="top"
            src={image}
            alt={name}
            style={{
              height: "260px",
              objectFit: "cover",
              borderTopLeftRadius: "1.5rem",
              borderTopRightRadius: "1.5rem",
              borderBottom: "4px solid #6366f1"
            }}
          />
          <Card.Body
            className="text-center"
            style={{
              background: "rgba(255,255,255,0.85)",
              borderBottomLeftRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
              padding: "1.5rem"
            }}
          >
            <Card.Title
              style={{
                fontWeight: 800,
                color: "#6366f1",
                fontSize: "1.35rem",
                letterSpacing: "1px",
                marginBottom: "1rem"
              }}
            >
              {name}
            </Card.Title>
            <Button
              variant={like ? "success" : "outline-success"}
              size="sm"
              style={{
                borderRadius: "50%",
                marginBottom: "1rem",
                fontWeight: "bold",
                fontSize: "1.2rem",
                boxShadow: like ? "0 0 10px #22c55e" : "none",
                transition: "box-shadow 0.2s"
              }}
              onClick={handleLike}
            >
              {like ? "💚" : "🤍"}
            </Button>
            <br />
            <Button
              variant="primary"
              size="sm"
              style={{
                borderRadius: "1rem",
                fontWeight: 600,
                marginTop: "0.5rem"
              }}
              onClick={handleFlip}
            >
              See Details
            </Button>
          </Card.Body>
        </Card>
        {/* Back Side */}
        <Card
          className="m-2 shadow"
          style={{
            width: "19rem",
            borderRadius: "1.5rem",
            overflow: "hidden",
            background: "linear-gradient(135deg, #f1f5f9 60%, #e0e7ff 100%)",
            border: "none",
            boxShadow: "0 6px 24px 0 rgba(99,102,241,0.13)",
            position: "absolute",
            top: 0,
            left: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <Card.Body
            className="text-center"
            style={{
              background: "rgba(255,255,255,0.92)",
              borderRadius: "1.5rem",
              padding: "2rem 1.5rem",
              height: "410px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Card.Title
              style={{
                fontWeight: 800,
                color: "#6366f1",
                fontSize: "1.35rem",
                letterSpacing: "1px",
                marginBottom: "1rem"
              }}
            >
              {name}
            </Card.Title>
            <Card.Text className="mb-2" style={{ fontSize: "1.1rem" }}>
              <strong style={{ color: "#475569" }}>Team:</strong> {team}
            </Card.Text>
            <Card.Text className="mb-2" style={{ fontSize: "1.1rem" }}>
              <strong style={{ color: "#475569" }}>Nationality:</strong> {nationality}
            </Card.Text>
            <Card.Text className="mb-2" style={{ fontSize: "1.1rem" }}>
              <strong style={{ color: "#475569" }}>Jersey #:</strong> {jerseyNumber}
            </Card.Text>
            <Card.Text style={{ fontSize: "1.1rem" }}>
              <strong style={{ color: "#475569" }}>Age:</strong> {age}
            </Card.Text>
            <Button
              variant="outline-primary"
              size="sm"
              style={{
                borderRadius: "1rem",
                fontWeight: 600,
                marginTop: "1.5rem"
              }}
              onClick={handleFlip}
            >
              Back
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: "N/A",
  image: "https://via.placeholder.com/300x260?text=No+Image"
};

export default Player;