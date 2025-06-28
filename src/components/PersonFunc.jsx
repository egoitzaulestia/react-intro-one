import React from "react";

const PersonFunc = (props) => {
  return (
    <h3>
      {props.name} {props.surname}, {props.age} years old
    </h3>
  );
};

export default PersonFunc;
