import React from "react";

const Title = () => {
  const title = "WELCOME TO REACT SCROLL UTILITIES".split("");
  return (
    <h1>
      {title.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </h1>
  );
};

export default Title;
