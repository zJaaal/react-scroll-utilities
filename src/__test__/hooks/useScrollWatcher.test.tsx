import { cleanup, fireEvent, render } from "@testing-library/react";
import { describe, expect } from "vitest";
import getBoundingClientRectMock from "../mock/getBoundingClientRectMock";
import UseScrollWatcher from "../test-components/scrollwatcher/UseScrollWatcher";

describe("useScrollWatcher Hook", () => {
  afterEach(cleanup);

  it("should return a HTMLDivElement", () => {
    const testComponent = render(<UseScrollWatcher />);

    expect(
      testComponent.queryByTestId("element")?.innerHTML,
      "element should have a value of: [object HTMLDivElement]"
    ).toBe("Element: [object HTMLDivElement]");
  }),
    it("should return 0 for X value", () => {
      const testComponent = render(<UseScrollWatcher />);

      expect(testComponent.queryByTestId("x")?.innerHTML, "x property should be 0 on init").toBe(
        "X: 0"
      );
    }),
    it("should return 0 for Y value", () => {
      const testComponent = render(<UseScrollWatcher />);

      expect(testComponent.queryByTestId("y")?.innerHTML, "y property should be 0 on init").toBe(
        "Y: 0"
      );
    }),
    it("should change Y value in vertical scroll", () => {
      const testComponent = render(<UseScrollWatcher />);

      fireEvent.scroll(testComponent.getByTestId("scroll") as Element, {
        target: {
          scrollTop: 400,
        },
      });

      expect(
        testComponent.queryByTestId("y")?.innerHTML,
        "y property should not be 0 on vertical scroll"
      ).not.toBe("Y: 0");
    }),
    it("should change X value in horizontal scroll", () => {
      const testComponent = render(<UseScrollWatcher />);

      fireEvent.scroll(testComponent.getByTestId("scroll") as Element, {
        target: {
          scrollLeft: 400,
        },
      });

      expect(
        testComponent.queryByTestId("x")?.innerHTML,
        "x property should not be 0 on horizontal scroll"
      ).not.toBe("X: 0");
    });
});
