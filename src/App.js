import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
  if (value === "=") {
    if (!input || isNaN(parseFloat(input))) {
      return;
    }
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  } else if (value === "C") {
    setInput("");
  } else if (value === "%") {
    if (!input || isNaN(parseFloat(input))) {
      return;
    }
    try {
      const result = parseFloat(input) / 100;
      setInput(result.toString());
    } catch {
      setInput("Erro");
    }
  } else {
    setInput((prev) => prev + value);
  }
};


  const buttons = [
    "C", "%", "←", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (btn === "←") {
                setInput((prev) => prev.slice(0, -1));
              } else {
                handleClick(btn);
              }
            }}
            className={`button ${btn === "=" ? "equals" : ""}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
