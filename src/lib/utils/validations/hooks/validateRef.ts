import { findDOMNode } from "react-dom";

const validateRef = (element: HTMLElement) => {
  try {
    findDOMNode(element);
  } catch (error) {
    throw new Error(`${element} is not a valid HTML Element.`);
  }
};

export default validateRef;
