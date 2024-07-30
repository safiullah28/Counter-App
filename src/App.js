import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const ResetCount = () => {
    setCount(0);
  };
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <h1>{count}</h1>
      </div>

      <div className="container-2">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            Increment();
          }}
        >
          +
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            Decrement();
          }}
        >
          ---
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            ResetCount();
          }}
        >
          Reset
        </Button>
      </div>
    </>
  );
}

export default App;
