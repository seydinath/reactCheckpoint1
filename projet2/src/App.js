import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from "./Description";
import Name from "./Name";
import Price from "./Price";
import Image from "./Image";

// Provide your first name here, or leave it as an empty string
const firstName = "seydina"; 

function App() {
  return (
    <div
      className="App d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)",
        minHeight: "100vh",
      }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: "380px",
          borderRadius: "2rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(6px)",
          padding: "2rem 1.5rem",
        }}
      >
        <div
          className="card shadow-lg border-0 rounded-4"
          style={{
            background: "linear-gradient(120deg, #e0e7ff 60%, #f1f5f9 100%)",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 24px 0 rgba(99,102,241,0.10)",
            marginBottom: "1.5rem",
          }}
        >
          <div className="card-body text-center">
            <div style={{ marginBottom: "1rem" }}>
              <Image />
            </div>
            <Name />
            <Price />
            <Description />
          </div>
        </div>
        <div
          className="text-center mt-4"
          style={{
            background: "rgba(99,102,241,0.08)",
            borderRadius: "1rem",
            padding: "1.2rem 0.5rem",
            boxShadow: "0 2px 12px 0 rgba(99,102,241,0.06)",
          }}
        >
          <h4
            style={{
              color: "#6366f1",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "0.7rem",
              fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
            }}
          >
            Hello, {firstName ? firstName : "there"}!
          </h4>
          {firstName && (
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=6366f1&color=fff&size=90&rounded=true&bold=true`}
              alt={firstName}
              style={{
                borderRadius: "50%",
                marginTop: "5px",
                boxShadow: "0 2px 12px 0 rgba(99,102,241,0.15)",
                border: "3px solid #6366f1",
                width: "80px",
                height: "80px",
                objectFit: "cover",
                transition: "transform 0.2s",
                cursor: "pointer"
              }}
              onMouseOver={e => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
