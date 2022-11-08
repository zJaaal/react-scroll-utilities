import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import Render from "../lib/components/render/Render";
import ScrollWatcher from "../lib/components/ScrollWatcher";
import getBoundingClientRectMock from "./mock/getBoundingClientRectMock";
import matchMediaMock from "./mock/matchMediaMock";

describe("Render Component", () => {
  afterEach(cleanup);

  beforeAll(() => {
    getBoundingClientRectMock();
    matchMediaMock();
  });

  it("should render when the useProximity hook returns onSight as true", () => {
    const RenderTestComponent = render(
      <ScrollWatcher>
        <Render>
          <p>Hi i'm being rendered</p>
        </Render>
      </ScrollWatcher>
    );

    fireEvent.scroll(window, {
      target: { scrollX: window.innerWidth / 2 },
    });

    fireEvent.scroll(window, {
      target: { scrollY: window.innerHeight / 2 },
    });

    expect(
      RenderTestComponent.getByText("Hi i'm being rendered"),
      "Component should render when the component is on sight"
    ).toBeTruthy();
  }),
    it("should not render the useProximity hook returns onSight as false", () => {
      const RenderTestComponent = render(
        <ScrollWatcher>
          <Render>
            <p>Hi i'm not being rendered</p>
          </Render>
        </ScrollWatcher>
      );

      fireEvent.scroll(window, {
        target: { scrollX: window.innerWidth * 2 },
      });

      fireEvent.scroll(window, {
        target: { scrollY: window.innerHeight * 2 },
      });

      expect(
        RenderTestComponent.queryByText("Hi i'm not being rendered"),
        "Component should be out of bounds of viewport"
      ).toBeFalsy();
    });
});
