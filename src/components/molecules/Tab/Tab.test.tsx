import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Tab from "./Tab.tsx";

test("Tab displays an optional badge", () => {
  const badgeData = {
    text: "Info",
    variant: "neutral",
  }
  render(<Tab badge={badgeData}/>);
  const badge = screen.getByTestId(`badge-${badgeData.variant}`);
  expect(badge).toBeInTheDocument();
});