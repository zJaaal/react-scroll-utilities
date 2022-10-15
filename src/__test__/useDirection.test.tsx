import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import ScrollWatcher from "../lib/components/ScrollWatcher";
import UseDirection from "./components/UseDirection";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";

describe("useDirection hook", () => {
  afterEach(cleanup);

  it("Should display the default direction value", () => {
    const UseDirectionTestComponent = render(
      <ScrollWatcher>
        <UseDirection />
      </ScrollWatcher>
    );

    expect(
      UseDirectionTestComponent.getByText("DOWN"),
      "Should display 'DOWN'"
    ).toBeTruthy();
  }),
    it("Should display the current scroll direction", () => {
      const UseDirectionTestComponent = render(
        <ScrollWatcher>
          <UseDirection />
        </ScrollWatcher>
      );

      fireEvent.scroll(window, {
        target: { scrollY: window.innerHeight * -2 },
      });

      expect(
        UseDirectionTestComponent.getByText("UP"),
        "Should display 'UP'"
      ).toBeTruthy();

      fireEvent.scroll(window, {
        target: { scrollY: window.innerHeight * 2 },
      });

      expect(
        UseDirectionTestComponent.getByText("DOWN"),
        "Should display 'DOWN'"
      ).toBeTruthy();
    });
});
