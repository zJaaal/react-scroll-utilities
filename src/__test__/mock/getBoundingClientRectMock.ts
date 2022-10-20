import React from "react";

const getBoundingClientRectMock = (): DOMRect => {
  return {
    height: 0,
    width: 0,
    x: window.innerWidth - window.scrollX,
    y: window.innerHeight - window.scrollY,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    toJSON: function () {
      throw new Error("Function not implemented.");
    },
  };
};

export default getBoundingClientRectMock;
