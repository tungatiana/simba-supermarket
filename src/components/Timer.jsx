import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // format time (mm:ss)
  const formatTime = () => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // timer logic
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={styles.container}>
      <h2>🛒 Shopping Timer</h2>

      <div style={styles.topSection}>
        <div>
          <button onClick={() => setSeconds((s) => Math.max(0, s - 60))}>
            -1 min
          </button>

          <span style={styles.number}>
            {Math.floor(seconds / 60)} min
          </span>

          <button onClick={() => setSeconds((s) => s + 60)}>
            +1 min
          </button>
        </div>

        <div style={styles.display}>
          <h1>{formatTime()}</h1>

          <button onClick={() => setRunning(!running)}>
            {running ? "Pause" : "Start"}
          </button>
        </div>
      </div>

      <button
        style={styles.reset}
        onClick={() => {
          setRunning(false);
          setSeconds(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "30px auto",
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "12px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  number: {
    margin: "0 10px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  display: {
    textAlign: "center",
  },
  reset: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};