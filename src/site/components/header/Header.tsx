import React from "react";
import Title from "../title/Title";

const Header = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title />
    </div>
  );
};

export default Header;
