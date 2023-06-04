import React, { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("TIME");
  const [intervalId, setIntervalId] = useState(null);

  const getTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());

    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    setIntervalId(newIntervalId);
  };

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
