import React from "react";

const getBoundingClientRectMock = (): void => {
  HTMLElement.prototype.getBoundingClientRect = function () {
    return {
      height: 500,
      width: 500,

      //Not sure about this but is working
      x: window.innerWidth - window.scrollX,
      y: window.innerHeight - window.scrollY,

      //The components always renders at the top of the enviroment, so this calculations are indeed accurate
      bottom: window.scrollX + 500,
      left: window.scrollY,
      right: window.scrollY + 500,
      top: window.scrollX,
      toJSON: function () {
        throw new Error("Function not implemented.");
      },
    };
  };
};

export default getBoundingClientRectMock;
