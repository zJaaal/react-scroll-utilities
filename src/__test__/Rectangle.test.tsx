import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeAll, describe, it, expect } from "vitest";
import { ScrollWatcher } from "../lib";
import Rectangle from "../lib/components/rectangle/Rectangle";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";
import matchMediaMock from "./mock/matchMediaMock";

describe("Rectangle Component", () => {
  afterEach(cleanup);

  beforeAll(() => {
    getBoundingClientRectMock();
    matchMediaMock();
  });

  it("Should render without props", () => {
    const RectangleTestComponent = render(
      <ScrollWatcher>
        <Rectangle />
      </ScrollWatcher>
    );

    expect(
      RectangleTestComponent.queryByTestId("rectangle"),
      "Rectangle should be rendered"
    ).toBeTruthy();
  }),
    it("Should render with the initial styles", () => {
      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle />
        </ScrollWatcher>
      );

      expect(
        RectangleTestComponent.queryByTestId("rectangle"),
        "Rectangle should be rendered with the initial styles"
      ).toHaveStyle(
        "width: 200px; height: 200px; transform: rotate(0deg) scaleX(1);"
      );
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the deg
    it.skip("Should change the deg on scroll", () => {
      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle />
        </ScrollWatcher>
      );

      //Didn't write anything because I'm not sure of how to test it
      //I need to compare the 2 background values or I can obtain the deg with regex and compare them
    }),
    it("Should change its background when setting backgroundColor prop", () => {
      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle backgroundColor="blue" />
        </ScrollWatcher>
      );

      expect(
        RectangleTestComponent.queryByTestId("inner-rectangle"),
        "InnerCircle should be rendered with a blue background"
      ).toHaveStyle("backgroundColor: blue;");
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the conical gradient
    it.skip("Should change its color when setting color prop", () => {
      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle color="blue" />
        </ScrollWatcher>
      );

      expect(
        RectangleTestComponent.queryByTestId("inner-rectangle"),
        "Rectangle should be rendered with a blue line"
      ).toHaveStyle("background: conic-gradient(blue 0deg, white 0deg)");
    }),
    it("Should reverse the whole div with a scaleX(-1) when setting clockwise prop to false", () => {
      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle clockwise={false} />
        </ScrollWatcher>
      );

      expect(
        RectangleTestComponent.queryByTestId("rectangle"),
        "Rectangle should be rendered with scaleX(-1)"
      ).toHaveStyle("transform: rotate(0deg) scaleX(-1);");
    }),
    it("Should change its stroke when setting stroke prop", () => {
      let stroke = 5;

      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle stroke={stroke} />
        </ScrollWatcher>
      );

      //Calculate stroke by hand
      const rectangleHeight = parseInt(
        RectangleTestComponent.queryByTestId("rectangle")?.style
          .height as string
      );
      const innerRectangleHeight = parseInt(
        RectangleTestComponent.queryByTestId("inner-rectangle")?.style
          .height as string
      );

      expect(
        rectangleHeight - innerRectangleHeight,
        "Difference between rectangleHeight and innerRectangleHeight should be 5"
      ).toBe(stroke);
    }),
    it("Should change its size when setting height prop", () => {
      let height = 400;

      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle height={height} />
        </ScrollWatcher>
      );

      const rectangleHeight = parseInt(
        RectangleTestComponent.queryByTestId("rectangle")?.style
          .height as string
      );

      expect(
        rectangleHeight == height,
        "Rectangle height should be equal to 400"
      ).toBeTruthy();
    }),
    it("Should change its size when setting width prop", () => {
      let width = 400;

      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle width={width} />
        </ScrollWatcher>
      );

      const rectangleWidth = parseInt(
        RectangleTestComponent.queryByTestId("rectangle")?.style.width as string
      );

      expect(
        rectangleWidth == width,
        "Rectangle width should be equal to 400"
      ).toBeTruthy();
    }),
    it("Should render a children", () => {
      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle>
            <div>I'm inside Rectangle</div>
          </Rectangle>
        </ScrollWatcher>
      );

      expect(
        RectangleTestComponent.getByText("I'm inside Rectangle"),
        "Children should be rendered"
      ).toBeTruthy();
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the conical gradient
    it.skip("Should change its startDegree when setting that prop", () => {
      let startDegree = 100;

      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle startDegree={startDegree} />
        </ScrollWatcher>
      );
    }),
    //This test is not working, beacuse there's an issue in JSDom that don't set gradients to background and
    //there's no way to test the values of the conical gradient
    it.skip("Should change its endDegree when setting that prop", () => {
      let endDegree = 100;

      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle startDegree={endDegree} />
        </ScrollWatcher>
      );
    }),
    it("Should change the rotate style when setting rotate prop", () => {
      let rotate = 60;

      const RectangleTestComponent = render(
        <ScrollWatcher>
          <Rectangle rotate={rotate} />
        </ScrollWatcher>
      );

      expect(
        RectangleTestComponent.getByTestId("rectangle"),
        `Rectangle rotate should be equal to ${rotate}`
      ).toHaveStyle(`transform: rotate(${60}deg) scaleX(1)`);
    }),
    it("Should throw an error for incorrect values in props", () => {
      let error = null;
      try {
        render(
          <ScrollWatcher>
            <Rectangle stroke={-10} />
          </ScrollWatcher>
        );
      } catch (err) {
        error = err;
      }
      expect(error).toBeTruthy();
    });
});
