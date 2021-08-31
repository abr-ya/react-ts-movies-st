import React, { useState, useEffect } from "react";

interface IBsSearch {
  setter: (text: string) => void;
  value: string;
}

const BsSearch = ({ setter, value }: IBsSearch): JSX.Element => {
  const [text, setText] = useState("");

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setter(text);
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </form>
  );
};

export default BsSearch;
