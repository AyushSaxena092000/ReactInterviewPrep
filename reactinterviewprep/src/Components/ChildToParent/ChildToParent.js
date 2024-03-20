import React from "react";
import Child from "./Child";
const ChildToParent = () => {
    
  function getData(data) {
    console.log(data);
  }
  return (
    <div>
      <Child getData={getData} />
    </div>
  );
};

export default ChildToParent;
