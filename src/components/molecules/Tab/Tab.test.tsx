import { render, screen } from "@testing-library/react";
import { expect, describe } from "vitest";
import Tab from "./Tab.tsx";

const badgeData = {
  text: "Info",
  variant: "neutral",
}

describe("Tab", () => {
  describe("with a badge", () => {
    it("should display a badge", () => {
      render(<Tab badge={badgeData}/>);
      const badge = screen.getByTestId(`badge-${badgeData.variant}`);
      expect(badge).toBeInTheDocument();
    });
  })
});