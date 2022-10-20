import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import Render from "../lib/components/Render";
import ScrollWatcher from "../lib/components/ScrollWatcher";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";

describe("Render Component", () => {
  afterEach(cleanup);

  beforeAll(() => {
    HTMLElement.prototype.getBoundingClientRect = getBoundingClientRectMock;
  });

  it("should render on a proximity between 0 and 2 for Y", () => {
    const RenderTestComponent = render(
      <ScrollWatcher>
        <Render>Hi i'm being rendered</Render>
      </ScrollWatcher>
    );
    fireEvent.scroll(window, {
      target: { scrollY: window.innerHeight / 2 },
    });

    fireEvent.scroll(window, {
      target: { scrollX: window.innerWidth / 2 },
    });

    expect(
      RenderTestComponent.getByText("Hi i'm being rendered"),
      "Component should render when the proximity is between 0 and 2 for Y and between 0 and 3 for X"
    ).toBeTruthy();
  }),
    it("should not render out of a proximity between 0 and 2 for Y and out of between 0 and 3 for X", () => {
      const RenderTestComponent = render(
        <ScrollWatcher>
          <Render>Hi i'm not being rendered</Render>
        </ScrollWatcher>
      );

      fireEvent.scroll(window, {
        target: { scrollY: window.innerHeight * 2 },
      });

      fireEvent.scroll(window, {
        target: { scrollX: window.innerWidth * 2 },
      });

      expect(
        RenderTestComponent.queryByText("Hi i'm not being rendered"),
        "Component should be out of bounds of proximity acceptance for Y and and out of between 0 and 3 for X"
      ).toBeFalsy();
    });
});
