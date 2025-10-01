import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Tabs from "./Tabs.tsx";

test("The selected tab should show the corresponding tab panel", () => {
  const tabsData = [{
    id: 1,
    text: "Tab 1 title",
    content: "Tab 1 content",
  }];
  render(<Tabs data={tabsData}/>);
  const selectedTabId = tabsData[0].id;
  const tab = screen.getByTestId(`tab-${selectedTabId}`);
  const tabPanel = screen.getByTestId(`tab-panel-${selectedTabId}`);
  expect(tab).toHaveClass("tab--selected");
  expect(tabPanel).toBeVisible();
});

test("Click a new tab switches to that tab", () => {
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
    }
  ];
  render(<Tabs data={tabsData}/>);
  const firstTab = screen.getByTestId(`tab-${tabsData[0].id}`);
  const secondTab = screen.getByTestId(`tab-${tabsData[1].id}`);
  const firstTabPanel = screen.getByTestId(`tab-panel-${tabsData[0].id}`);
  const secondTabPanel = screen.getByTestId(`tab-panel-${tabsData[1].id}`);
  const activeClass = "tab--selected";
  expect(firstTab).toHaveClass(activeClass);
  expect(firstTabPanel).toBeVisible();
  expect(secondTab).not.toHaveClass(activeClass);
  expect(secondTabPanel).not.toBeVisible();
  fireEvent.click(secondTab);
  expect(firstTab).not.toHaveClass(activeClass);
  expect(firstTabPanel).not.toBeVisible();
  expect(secondTab).toHaveClass(activeClass);
  expect(secondTabPanel).toBeVisible();
});