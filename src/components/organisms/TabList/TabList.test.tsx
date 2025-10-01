import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import TabList from "./TabList.tsx";
const variants = ["pill",  "underline"];

test.each(variants)('Tab list should display the %s variant', ({ expected }) => {
  render(<TabList variant={expected} data={[]}/>);
  const tabVariant = screen.getByTestId(`tab-list-${expected}`);
  expect(tabVariant).toBeInTheDocument();
});