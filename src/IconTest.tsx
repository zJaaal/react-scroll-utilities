import React, { FC } from "react";

const IconTest: FC<any> = ({ __dynamicColor }) => {
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        borderRadius: "50%",
        transform: "translate(30%, 50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        gap: 2,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            backgroundColor: __dynamicColor,
          }}
        ></div>
        <div
          style={{
            borderRadius: "50%",
            height: "90px",
            width: "90px",
            backgroundColor: __dynamicColor,
          }}
        ></div>
        <div
          style={{
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            backgroundColor: __dynamicColor,
          }}
        ></div>
      </div>
      <h2 style={{ color: __dynamicColor, textAlign: "center" }}>
        {" "}
        Some random text with the color of the background
      </h2>
    </div>
  );
};

export default IconTest;
