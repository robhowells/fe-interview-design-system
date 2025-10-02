import { render, screen } from "@testing-library/react";
import {test, expect, describe} from "vitest";
import TabList from "./TabList.tsx";

const variants = ["pill",  "underline"];

describe("Tab list", () => {
  it.each(variants)("should display the %s variant when passed in", ({ expected }) => {
    render(<TabList variant={expected} data={[]}/>);
    const tabVariant = screen.getByTestId(`tab-list-${expected}`);
    expect(tabVariant).toBeInTheDocument();
  });
});