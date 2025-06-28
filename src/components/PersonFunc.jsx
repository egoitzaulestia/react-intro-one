import React from "react";

const PersonFunc = ({ name, surname, age }) => {
  return (
    <h3>
      <span>{name}</span> <span>{surname}</span>, <span>{age} years old</span>
    </h3>
  );
};

export default PersonFunc;
