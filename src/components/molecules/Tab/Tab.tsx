import "./Tab.css";
import Badge, { BadgeProps } from "../../atoms/Badge/Badge.tsx";
import * as React from "react";

export interface TabProps {
  index: number;
  text: string;
  badge?: BadgeProps;
  selected: number;
  variant: string;
  clickHandler: (index: number) => void;
  keyDownHandler: (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => void;
}

export default function Tab({
  index,
  text,
  badge,
  selected,
  variant,
  clickHandler,
  keyDownHandler,
}: TabProps) {
  const isSelected = index === selected;
  return (
    <li>
      <button
        id={`tab-${index}`}
        role="tab"
        type="button"
        aria-controls={`tab-panel-${index}`}
        aria-selected={isSelected}
        tabIndex={isSelected ? 0 : -1}
        onClick={() => clickHandler(index)}
        onKeyDown={(e) => keyDownHandler(e, index)}
        className={`tab tab--${variant} ${isSelected ? "tab--selected" : ""}`}
      >
        {text}
        {badge && <Badge text={badge.text} variant={badge.variant} />}
      </button>
    </li>
  );
}
