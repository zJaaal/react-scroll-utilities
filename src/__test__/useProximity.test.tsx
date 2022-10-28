import { render, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeAll, afterEach } from "vitest";
import ScrollWatcher from "../lib/components/ScrollWatcher";
import UseProximityX from "./components/UseProximityX";
import UseProximityY from "./components/UseProximityY";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";
import matchMediaMock from "./mock/matchMediaMock";

const isYInRange = (y: number) => y >= 0 && y <= 2;
const isXInRange = (x: number) => x >= 0 && x <= 3;

describe("useProximity custom hook", () => {
  afterEach(cleanup);

  beforeAll(() => {
    HTMLElement.prototype.getBoundingClientRect = getBoundingClientRectMock;
    matchMediaMock();
  });

  it("should return default proximity for Y", () => {
    const useProximityTestComponent = render(
      <ScrollWatcher>
        <UseProximityY />
      </ScrollWatcher>
    );

    expect(
      useProximityTestComponent.getByText("0"),
      "Component should render 0 as default value for Y"
    ).toBeTruthy();
  }),
    it("should change value on scroll for Y", () => {
      const useProximityTestComponent = render(
        <ScrollWatcher>
          <UseProximityY />
        </ScrollWatcher>
      );

      fireEvent.scroll(window, { target: { scrollY: 700 } });

      expect(
        useProximityTestComponent.queryByText("0"),
        "Component should not show 0 anymore for Y"
      ).toBeFalsy();
    }),
    it("should return a value approximately to 1 for visibility for Y", () => {
      const useProximityTestComponent = render(
        <ScrollWatcher>
          <UseProximityY />
        </ScrollWatcher>
      );

      //window.innerHeight / 2 because is the middle of the screen
      fireEvent.scroll(window, {
        target: { scrollY: window.innerHeight / 2 },
      });

      const proximity = Number(
        useProximityTestComponent.getByRole("log").textContent
      );

      expect(
        proximity,
        "Component should show a value between 0 and 2 for Y "
      ).toSatisfy(isYInRange);
    }),
    it("should return default proximity for X", () => {
      const useProximityTestComponent = render(
        <ScrollWatcher>
          <UseProximityX />
        </ScrollWatcher>
      );

      expect(
        useProximityTestComponent.getByText("0"),
        "Component should render 0 as default value for X"
      ).toBeTruthy();
    }),
    it("should change value on scroll for X", () => {
      const useProximityTestComponent = render(
        <ScrollWatcher>
          <UseProximityX />
        </ScrollWatcher>
      );

      fireEvent.scroll(window, { target: { scrollX: 700 } });

      expect(
        useProximityTestComponent.queryByText("0"),
        "Component should not show 0 anymore for X"
      ).toBeFalsy();
    }),
    it("should return a value approximately to 1 for visibility for X", () => {
      const useProximityTestComponent = render(
        <ScrollWatcher>
          <UseProximityX />
        </ScrollWatcher>
      );

      //window.innerWidth / 2 because is the middle of the screen
      fireEvent.scroll(window, {
        target: { scrollX: window.innerWidth / 2 },
      });

      const proximity = Number(
        useProximityTestComponent.getByRole("log").textContent
      );

      expect(
        proximity,
        "Component should show a number between 0 and 3 for X"
      ).toSatisfy(isXInRange);
    });
});
