// What is ContextApi

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

//  create, provider, consumer

import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext();
const ContextApi = () => {
  const name = "ayush";
  const gender = "male";
  return (
    <>
      <data.Provider value={name}>
        <data.Provider value={gender}>
          <ChildA />
        </data.Provider>
      </data.Provider>
    </>
  );
};

export default ContextApi;
export { data, data1 };
