import { render, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeAll, afterEach } from "vitest";
import UseProximity from "./components/UseProximity";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";

describe("useProximity custom hook", () => {
  afterEach(cleanup);

  beforeAll(() => {
    HTMLElement.prototype.getBoundingClientRect = getBoundingClientRectMock;
  });

  it("should return default proximity", () => {
    const useProximityTestComponent = render(<UseProximity />);

    expect(
      useProximityTestComponent.getByText("0"),
      "Component should render 0 as default value"
    ).toBeTruthy();
  }),
    it("should change value on scroll", () => {
      const useProximityTestComponent = render(<UseProximity />);

      fireEvent.scroll(window, { target: { scrollY: 700 } });

      expect(
        useProximityTestComponent.queryByText("0"),
        "Component should not show 0 anymore"
      ).toBeFalsy();
    }),
    it("should return a value approximately to 1 for visibility", () => {
      const useProximityTestComponent = render(<UseProximity />);

      //window.innerHeight / 2 because is the middle of the screen
      fireEvent.scroll(window, {
        target: { scrollY: window.innerHeight / 2 },
      });

      expect(
        useProximityTestComponent.queryByText("0"),
        "Component should not show 0 anymore"
      ).toBeFalsy();
    });
});
