import React from "react";
import "./index.scss";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    fetch("	https://api.adviceslip.com/advice").then((res) => {
      return res.json().then((data) => {
        setAdvice(data.slip);
        console.log(advice);
      });
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="advice">{advice.advice}</h1>
        <button className="btn" onClick={getAdvice}>
          Get Advice
        </button>
      </div>
    </>
  );
}

export default App;
