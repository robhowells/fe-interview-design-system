import { render, screen } from "@testing-library/react";
import { expect, describe } from "vitest";
import Badge from "./Badge.tsx";

const variants = ["neutral",  "positive", "negative"];

describe("Badge", () => {
  it.each(variants)("should display the %s variant when passed in", ({ expected }) => {
    render(<Badge variant={expected} data={[]}/>);
    const badgeVariant = screen.getByTestId(`badge-${expected}`);
    expect(badgeVariant).toBeInTheDocument();
  });
});