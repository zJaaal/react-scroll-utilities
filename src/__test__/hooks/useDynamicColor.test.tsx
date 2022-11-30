import { cleanup, fireEvent, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ScrollWatcher } from "../../lib";
import getBoundingClientRectMock from "../mock/getBoundingClientRectMock";
import UseDynamicColorTest from "../test-components/dynamicColor/useDynamicColorTest";

describe("useDynamicColor hook", () => {
  beforeAll(() => {
    getBoundingClientRectMock();
  });
  afterEach(cleanup);
  it("should render with its default value", () => {
    const DynamicColorTest = render(
      <ScrollWatcher>
        <UseDynamicColorTest />
      </ScrollWatcher>
    );

    expect(
      DynamicColorTest.getByTestId("dynamic-color"),

      "DynamicColor should be plain white by default"
    ).toHaveStyle("background-color: rgb(0,0,0)");
  }),
    it("Should change its color on scroll when going down", () => {
      const DynamicColorTest = render(
        <ScrollWatcher>
          <UseDynamicColorTest style={{ height: " 800px" }} />
        </ScrollWatcher>
      );

      //Scroll down
      for (let i = 0; i < 30; i++) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        DynamicColorTest.queryByText("rgb(0, 0, 0)"),
        "DynamicColor should not be in its default value"
      ).toBeFalsy();
    }),
    it("Should change its color on scroll when going up again", () => {
      const DynamicColorTest = render(
        <ScrollWatcher>
          <UseDynamicColorTest style={{ height: " 800px" }} />
        </ScrollWatcher>
      );

      //Scroll down
      for (let i = 0; i < 30; i++) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        DynamicColorTest.queryByText("rgb(0, 0, 0)"),
        "DynamicColor should not be in its default value"
      ).toBeFalsy();

      //Scroll up
      for (let i = 60; i > 0; i--) {
        fireEvent.scroll(window, {
          target: { scrollY: i * 10 },
        });
      }

      expect(
        DynamicColorTest.queryByText("rgb(0, 0, 0)"),
        "DynamicColor should be in its default value"
      ).toBeTruthy();
    });
});
