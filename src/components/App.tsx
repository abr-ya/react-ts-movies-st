import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [scoops, setScoops] = useState([]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get("http://localhost:3030/scoops", {
        cancelToken: cancelTokenSource.token,
      })
      .then((res) => setScoops(res.data))
      .catch((e) => {
        if (axios.isCancel(e)) {
          console.log("Request canceled, error message: ", e.message);
        } else {
          console.log("Error: ", e.message);
        }
      });

    return () => {
      cancelTokenSource.cancel("Cancel in useEffect Cleaner.");
    };
  }, []);

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
        <p>{`We have data about ${scoops.length} scoops`}</p>
      </header>
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
