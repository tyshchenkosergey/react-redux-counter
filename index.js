import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={addOne}>Add +1</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
