import React from "react";

const PersonFunc = (props) => {
  return (
    <div>
      <span>
        {props.name} {props.surname}, {props.age} years old
      </span>
    </div>
  );
};

export default PersonFunc;
