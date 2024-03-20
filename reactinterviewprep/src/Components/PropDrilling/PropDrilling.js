// What are props?
// In React, components can receive information from a parent component by utilizing props (short for properties). A prop is an object accessible to all React components. It serves as a means to pass data from a parent component to a child component.

/* <Welcome fullName = "Sourav Sharma" /> */

// What is Prop Drilling?
// Anyone who has worked in React would have faced this and if not then will face it definitely. Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. Here is a diagram to demonstrate it better. Data needed to be sent from Parent to ChildC. In this article different ways to do that are discussed.

import React from "react";
import ChildA from "./ChildA";

const PropDrilling = () => {
  const name = "Saxena";
  return (
    <div>
      <ChildA name={name} />
    </div>
  );
};

export default PropDrilling;
