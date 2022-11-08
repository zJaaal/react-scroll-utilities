import { cleanup, fireEvent, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ScrollWatcher } from "../lib";
import DynamicBackground from "../lib/components/dynamicBackground/DynamicBackground";
import DynamicBackgroundTest from "./components/DynamicBackgroundTest";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";

describe("DynamicBackground Component", () => {
  beforeAll(() => {
    getBoundingClientRectMock();
  });
  afterEach(cleanup);
  it("should render with its default props", () => {
    const DynamicBGTest = render(
      <ScrollWatcher>
        <DynamicBackground />
      </ScrollWatcher>
    );

    expect(
      DynamicBGTest.getByTestId("dynamic-background"),
      "DynamicBackground should be plain white by default"
    ).toHaveStyle("background-color: rgb(0,0,0)");
  }),
    it("should be capable of render children", () => {
      const DynamicBGTest = render(
        <ScrollWatcher>
          <DynamicBackground startColor={[123, 5, 0]}>
            <p>I'm inside of DynamicBackground</p>
          </DynamicBackground>
        </ScrollWatcher>
      );

      expect(
        DynamicBGTest.getByText("I'm inside of DynamicBackground"),
        "should render its children"
      ).toBeTruthy();
    }),
    it("should be capable of pass its color to children", () => {
      const DynamicBGTest = render(
        <ScrollWatcher>
          <DynamicBackground startColor={[123, 5, 0]}>
            {(color) => (
              <p style={{ color: color }}>I have the color of my parent</p>
            )}
          </DynamicBackground>
        </ScrollWatcher>
      );

      expect(
        DynamicBGTest.getByText("I have the color of my parent"),
        "p tag should have an rgb color of 123, 5, 0"
      ).toHaveStyle("color: rgb(123, 5, 0)");
    }),
    it("Should change its color on scroll when going down", () => {
      const DynamicBGTest = render(
        <ScrollWatcher>
          <DynamicBackgroundTest style={{ height: " 800px" }} />
        </ScrollWatcher>
      );

      //Scroll down
      for (let i = 0; i < 30; i++) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        DynamicBGTest.queryByText("rgb(0, 0, 0)"),
        "DynamicBackground color should not be in its default value"
      ).toBeFalsy();
    }),
    it("Should change its color on scroll when going up again", () => {
      const DynamicBGTest = render(
        <ScrollWatcher>
          <DynamicBackgroundTest style={{ height: " 800px" }} />
        </ScrollWatcher>
      );

      //Scroll down
      for (let i = 0; i < 30; i++) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        DynamicBGTest.queryByText("rgb(0, 0, 0)"),
        "DynamicBackground color should not be in its default value"
      ).toBeFalsy();

      //Scroll up
      for (let i = 60; i > 0; i--) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        DynamicBGTest.queryByText("rgb(0, 0, 0)"),
        "DynamicBackground color should be in its default value"
      ).toBeTruthy();
    });
});
