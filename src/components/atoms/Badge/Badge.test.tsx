import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Badge from "./Badge.tsx";
const variants = ["neutral",  "positive", "negative"];

test.each(variants)('Badge should display %s variant', ({ expected }) => {
  render(<Badge variant={expected} data={[]}/>);
  const badgeVariant = screen.getByTestId(`badge-${expected}`);
  expect(badgeVariant).toBeInTheDocument();
});