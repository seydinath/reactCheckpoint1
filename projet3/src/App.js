import React from "react";
import './App.css';
import PlayersList from "./PlayersList";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)",
        minHeight: "100vh"
      }}
    >
      <PlayersList />
    </div>
  );
}

export default App;
