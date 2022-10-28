import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import ScrollWatcher from "../lib/components/ScrollWatcher";
import UseDirection from "./components/UseDirection";
import matchMediaMock from "./mock/matchMediaMock";

describe("useDirection hook", () => {
  afterEach(cleanup);
  beforeAll(() => matchMediaMock());

  it("Should display the default direction value", () => {
    const UseDirectionTestComponent = render(
      <ScrollWatcher>
        <UseDirection />
      </ScrollWatcher>
    );

    expect(
      UseDirectionTestComponent.queryByText("DOWN"),
      "Should display 'DOWN'"
    ).toBeTruthy();
  }),
    it("Should display 'UP' for up scroll", () => {
      const UseDirectionTestComponent = render(
        <ScrollWatcher>
          <UseDirection />
        </ScrollWatcher>
      );

      fireEvent.scroll(window, {
        target: { scrollY: window.innerHeight * -2 },
      });

      expect(
        UseDirectionTestComponent.queryByText("UP"),
        "Should display 'UP'"
      ).toBeTruthy();
    }),
    it("Should display 'RIGHT' for right scroll", () => {
      const UseDirectionTestComponent = render(
        <ScrollWatcher>
          <UseDirection />
        </ScrollWatcher>
      );

      fireEvent.scroll(window, {
        target: { scrollX: window.innerWidth * 2 },
      });

      expect(
        UseDirectionTestComponent.queryByText("RIGHT"),
        "Should display 'RIGHT'"
      ).toBeTruthy();
    }),
    it("Should display 'LEFT' for left scroll", () => {
      const UseDirectionTestComponent = render(
        <ScrollWatcher>
          <UseDirection />
        </ScrollWatcher>
      );

      fireEvent.scroll(window, {
        target: { scrollX: window.innerWidth * -2 },
      });

      expect(
        UseDirectionTestComponent.queryByText("LEFT"),
        "Should display 'LEFT'"
      ).toBeTruthy();
    });
});
