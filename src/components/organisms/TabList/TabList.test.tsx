import { render, screen } from "@testing-library/react";
import { expect, describe } from "vitest";
import TabList from "./TabList.tsx";

const variants = ["pill", "underline"];

describe.each(variants)("Tab list with the %s variant", (expected) => {
  it("should display the correct variant", () => {
    render(
      <TabList
        variant={expected}
        data={[]}
        selected={1}
        clickHandler={() => {}}
        keyDownHandler={() => {}}
      />,
    );
    const tabVariant = screen.getByTestId(`tab-list-${expected}`);
    expect(tabVariant).toBeInTheDocument();
  });
});
