import React, { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("TIME");

  const getTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  };

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
