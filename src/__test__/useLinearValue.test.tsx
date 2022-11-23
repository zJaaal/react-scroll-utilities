import { cleanup, fireEvent, render } from "@testing-library/react";
import { expect } from "vitest";
import { ScrollWatcher } from "../lib";
import LinearValueTest from "./components/linearValue/LinearValueTest";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";

describe("useLinearValue custom hook", () => {
  beforeAll(() => getBoundingClientRectMock());
  afterEach(cleanup);
  it("Should display the start value", () => {
    let startValue = 100;
    let endValue = 200;
    const LinearValueComponent = render(
      <ScrollWatcher>
        <LinearValueTest startValue={startValue} endValue={endValue} />
      </ScrollWatcher>
    );

    expect(
      LinearValueComponent.queryByText(startValue),
      "useLinearValue should return its start value"
    ).toBeTruthy();
  }),
    it("Should display the start value", () => {
      let startValue = 100;
      let endValue = 200;
      const LinearValueComponent = render(
        <ScrollWatcher>
          <LinearValueTest startValue={startValue} endValue={endValue} />
        </ScrollWatcher>
      );

      //Scroll down
      for (let i = 0; i < 30; i++) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        LinearValueComponent.queryByText(startValue),
        "useLinearValue should not return its start value, since scroll triggered"
      ).toBeFalsy();
    }),
    it("Should display the start value", () => {
      let startValue = 100;
      let endValue = 200;
      const LinearValueComponent = render(
        <ScrollWatcher>
          <LinearValueTest startValue={startValue} endValue={endValue} />
        </ScrollWatcher>
      );

      //Scroll down
      for (let i = 0; i < 30; i++) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        LinearValueComponent.queryByText(startValue),
        "useLinearValue should not return its start value, since scroll triggered"
      ).toBeFalsy();

      //Scroll up
      for (let i = 60; i > 0; i--) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        LinearValueComponent.queryByText(startValue),
        "useLinearValue should return to its start value"
      ).toBeTruthy();
    });
});
