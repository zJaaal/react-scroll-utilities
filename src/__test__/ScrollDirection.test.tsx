import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ScrollDirection from "../components/ScrollDirection";

describe("ScrollDirection Context", () => {
  it("Should render its children", () => {
    const ScrollDirectionTest = render(
      <ScrollDirection>
        <p>Hi from context</p>
      </ScrollDirection>
    );

    expect(
      ScrollDirectionTest.getByText("Hi from context"),
      "Context should render its children"
    ).toBeTruthy();
  });
});
