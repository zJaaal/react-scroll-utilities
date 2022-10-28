import { vitest } from "vitest";

const matchMediaMock = () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vitest.fn((query) => ({
      match: false,
      media: query,
      onchange: null,
      addEventListener: vitest.fn(),
      removeEventListener: vitest.fn(),
      dispatchEvent: vitest.fn(),
    })),
  });
};

export default matchMediaMock;
