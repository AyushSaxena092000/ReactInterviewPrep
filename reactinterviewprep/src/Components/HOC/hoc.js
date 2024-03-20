// A Higher Order Component is a function that takes a component and returns a new component with additional functionality. It's a pattern in React for reusing component logic. HOCs are used to share behavior between components without repeating code.

import React, { useState } from "react";

const HigherOrder = () => {
  return (
    <div>
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />
    </div>
  );
};

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      <props.cmp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default HigherOrder;
