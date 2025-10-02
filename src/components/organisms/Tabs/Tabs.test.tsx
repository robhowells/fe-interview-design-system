import { fireEvent, render, screen } from "@testing-library/react";
import { expect, describe } from "vitest";
import Tabs from "./Tabs.tsx";

const tabsData = [
  {
    id: 1,
    text: "Tab 1 title",
    content: "Tab 1 content",
  },
  {
    id: 2,
    text: "Tab 2 title",
    content: "Tab 2 content",
  },
];

describe("Tabs", () => {
  describe("with a selected tab item", () => {
    it("should show its corresponding tab panel", () => {
      render(<Tabs data={tabsData} variant={"pill"} />);
      const tab = screen.getByText(tabsData[0].text);
      const tabPanel = screen.getByText(tabsData[0].content);
      expect(tab).toHaveClass("tab--selected");
      expect(tabPanel).toBeVisible();
    });
  });

  it("should switch to a new tab when clicked", () => {
    render(<Tabs data={tabsData} variant={"pill"} />);
    const firstTab = screen.getByText(tabsData[0].text);
    const secondTab = screen.getByText(tabsData[1].text);
    const firstTabPanel = screen.getByText(tabsData[0].content);
    const secondTabPanel = screen.getByText(tabsData[1].content);
    const activeClass = "tab--selected";

    fireEvent.click(secondTab);

    expect(firstTab).not.toHaveClass(activeClass);
    expect(firstTabPanel).not.toBeVisible();
    expect(secondTab).toHaveClass(activeClass);
    expect(secondTabPanel).toBeVisible();
  });
});
