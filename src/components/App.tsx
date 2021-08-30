import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p className="title">Hello React!</p>
        <p>
          <button type="button" onClick={() => setCount((prev) => prev + 1)}>
            Add 1 to counter
          </button>
        </p>
        <p>{`count is: ${count}`}</p>
        <p>Edit *.tsx files and save to test HMR updates.</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </p>
      </header>
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
