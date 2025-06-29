import React from "react";

const PersonFunc = ({ name, surname, age }) => {
  return (
    <div>
      <span>
        {name} {surname}, {age} years old
      </span>
    </div>
  );
};

export default PersonFunc;
