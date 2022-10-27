import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeAll, describe, it, expect } from "vitest";
import { ScrollWatcher } from "../lib";
import Circle from "../lib/components/circle/Circle";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";
import matchMediaMock from "./mock/matchMediaMock";

describe("Circle Component", () => {
  afterEach(cleanup);

  beforeAll(() => {
    HTMLElement.prototype.getBoundingClientRect = getBoundingClientRectMock;
    matchMediaMock();
  });

  it("Should render without props", () => {
    const CircleTestComponent = render(
      <ScrollWatcher>
        <Circle />
      </ScrollWatcher>
    );

    expect(
      CircleTestComponent.queryByTestId("circle"),
      "Circle should be rendered"
    ).toBeTruthy();
  }),
    it("Should render with the initial styles", () => {
      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle />
        </ScrollWatcher>
      );

      expect(
        CircleTestComponent.queryByTestId("circle"),
        "Circle should be rendered with the initial styles"
      ).toHaveStyle(
        "width: 200px; height: 200px; transform: rotate(0deg) scaleX(1);"
      );
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the deg
    it.skip("Should change the deg on scroll", () => {
      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle />
        </ScrollWatcher>
      );

      //Didn't write anything because I'm not sure of how to test it
      //I need to compare the 2 background values or I can obtain the deg with regex and compare them
    }),
    it("Should change its background when setting backgroundColor prop", () => {
      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle backgroundColor="blue" />
        </ScrollWatcher>
      );

      expect(
        CircleTestComponent.queryByTestId("inner-circle"),
        "InnerCircle should be rendered with a blue background"
      ).toHaveStyle("backgroundColor: blue;");
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the conical gradient
    it.skip("Should change its color when setting color prop", () => {
      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle color="blue" />
        </ScrollWatcher>
      );

      expect(
        CircleTestComponent.queryByTestId("inner-circle"),
        "Circle should be rendered with a blue line"
      ).toHaveStyle("background: conic-gradient(blue 0deg, white 0deg)");
    }),
    it("Should reverse the whole div with a scaleX(-1) when setting clockwise prop to false", () => {
      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle clockwise={false} />
        </ScrollWatcher>
      );

      expect(
        CircleTestComponent.queryByTestId("circle"),
        "Circle should be rendered with scaleX(-1)"
      ).toHaveStyle("transform: rotate(0deg) scaleX(-1);");
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the conical gradient
    it.skip("Should change its speed when setting speed prop", () => {
      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle speed={10} />
        </ScrollWatcher>
      );

      //Should fire the same scroll event and compare the values

      // expect(
      //   someValue,
      //   "Circle should be greater than the last deg calculation since is faster"
      // ).toBeGreaterThan(lastCalculation));
    }),
    it("Should change its stroke when setting stroke prop", () => {
      let stroke = 5;

      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle stroke={stroke} />
        </ScrollWatcher>
      );

      //Calculate stroke by hand
      const circleRadius = parseInt(
        CircleTestComponent.queryByTestId("circle")?.style.height as string
      );
      const innerCircleRadius = parseInt(
        CircleTestComponent.queryByTestId("inner-circle")?.style
          .height as string
      );

      expect(
        circleRadius - innerCircleRadius,
        "Difference between circleRadius and innerCircleRadius should be 5"
      ).toBe(stroke);
    }),
    it("Should change its size when setting radius prop", () => {
      let radius = 400;

      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle radius={radius} />
        </ScrollWatcher>
      );

      const circleWidth = parseInt(
        CircleTestComponent.queryByTestId("circle")?.style.width as string
      );
      const circleHeight = parseInt(
        CircleTestComponent.queryByTestId("circle")?.style.height as string
      );

      expect(
        circleHeight == radius && circleWidth == radius,
        "Circle height and width should be equal to 400"
      ).toBeTruthy();
    }),
    it("Should render a children", () => {
      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle>
            <div>I'm inside Circle</div>
          </Circle>
        </ScrollWatcher>
      );

      expect(
        CircleTestComponent.getByText("I'm inside Circle"),
        "Children should be rendered"
      ).toBeTruthy();
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the conical gradient
    it.skip("Should change its startDegree when setting that prop", () => {
      let startDegree = 100;

      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle startDegree={startDegree} />
        </ScrollWatcher>
      );
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the conical gradient
    it.skip("Should change its endDegree when setting that prop", () => {
      let endDegree = 100;

      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle startDegree={endDegree} />
        </ScrollWatcher>
      );
    }),
    it("Should change the rotate style when setting rotate prop", () => {
      let rotate = 60;

      const CircleTestComponent = render(
        <ScrollWatcher>
          <Circle rotate={rotate} />
        </ScrollWatcher>
      );

      expect(
        CircleTestComponent.getByTestId("circle"),
        `Circle rotate should be equal to ${rotate}`
      ).toHaveStyle(`transform: rotate(${60}deg) scaleX(1)`);
    });
});
