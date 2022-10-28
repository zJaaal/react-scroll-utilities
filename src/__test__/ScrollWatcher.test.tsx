import { render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import ScrollWatcher from "../lib/components/ScrollWatcher";
import matchMediaMock from "./mock/matchMediaMock";

describe("ScrollWatcher Context", () => {
  beforeAll(() => matchMediaMock());
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
