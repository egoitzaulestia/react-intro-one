import React from "react";

const PersonFunc = (props) => {
  return (
    <span>
      {props.name} {props.surname}, {props.age} years old.
    </span>
  );
};

export default PersonFunc;
