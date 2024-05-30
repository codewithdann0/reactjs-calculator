import React, { useState } from 'react';

import './App.css';




const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <>
      <i class="fa-brands fa-react" id="logo"></i>
      <div id="container">
        <textarea value={input} id="display" readOnly></textarea>

        <div>
          <button id="clear" onClick={handleClear}>
            AC
          </button>
          <button id="divide" onClick={() => handleClick("/")}>
            /
          </button>
          <button id="multiply" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div>
          <button id="seven" onClick={() => handleClick("7")}>
            7
          </button>
          <button id="eight" onClick={() => handleClick("8")}>
            8
          </button>
          <button id="nine" onClick={() => handleClick("9")}>
            9
          </button>
          <button id="subtract" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div>
          <button id="four" onClick={() => handleClick("4")}>
            4
          </button>
          <button id="five" onClick={() => handleClick("5")}>
            5
          </button>
          <button id="six" onClick={() => handleClick("6")}>
            6
          </button>
          <button id="add" onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div>
          <button id="one" onClick={() => handleClick("1")}>
            1
          </button>
          <button id="two" onClick={() => handleClick("2")}>
            2
          </button>
          <button id="three" onClick={() => handleClick("3")}>
            3
          </button>
          <button id="percent" onClick={() => handleClick("%")}>
            %
          </button>
        </div>
        <div>
          <button id="zero" onClick={() => handleClick("0")}>
            0
          </button>
          <button id="decimal" onClick={() => handleClick(".")}>
            .
          </button>
          <button id="equal" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
      <div id="info">
        <h3>Design and coded</h3>
        <p>By Daniel Tigistu</p>
      </div>
    </>
  );
};

export default App;
