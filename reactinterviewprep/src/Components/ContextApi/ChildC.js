import React from "react";
import { data, data1 } from "./ContextApi";

const ChildC = () => {
  return (
    <data.Consumer>
      {(name) => {
        return (
          <data.Consumer>
            {(gender) => {
              return (
                <h1>
                  My name is {name} and my gender is {gender}
                </h1>
              );
            }}
          </data.Consumer>
        );
      }}
    </data.Consumer>
  );
};

export default ChildC;
