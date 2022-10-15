import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ScrollWatcher from "../lib/components/ScrollWatcher";

describe("ScrollWatcher Context", () => {
  it("Should render its children", () => {
    const ScrollWatcherTest = render(
      <ScrollWatcher>
        <p>Hi from context</p>
      </ScrollWatcher>
    );

    expect(
      ScrollWatcherTest.getByText("Hi from context"),
      "Context should render its children"
    ).toBeTruthy();
  });
});
