import { render, screen } from "@testing-library/react";
import { expect, describe } from "vitest";
import Badge from "./Badge.tsx";

const variants = ["neutral", "positive", "negative"];

describe.each(variants)("Badge with the %s variant", (expected) => {
  it("should display the correct variant", () => {
    render(<Badge variant={expected} text={"Badge"}/>);
    const badgeVariant = screen.getByTestId(`badge-${expected}`);
    expect(badgeVariant).toBeInTheDocument();
  });
});
