import React, { FC } from "react";

const Arrows: FC<any> = ({ direction }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        paddingTop: 50,
      }}
    >
      <img
        src="arrow.png"
        className={direction == "UP" ? "arrow reverse" : "arrow"}
      />
      <img
        src="arrow.png"
        className={direction == "UP" ? "arrow reverse" : "arrow"}
      />
    </div>
  );
};

export default Arrows;
