import "./Tab.css";
import Badge, { BadgeProps } from "../../atoms/Badge/Badge.tsx";
import * as React from "react";

export interface TabProps {
  id: number;
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
  id,
  text,
  badge,
  selected,
  variant,
  clickHandler,
  keyDownHandler,
}: TabProps) {
  const isSelected = id === selected;
  return (
    <li>
      <button
        id={`tab-${id}`}
        data-testid={`tab-${id}`}
        role="tab"
        type="button"
        aria-controls={`tab-panel-${id}`}
        aria-selected={isSelected}
        tabIndex={isSelected ? 0 : -1}
        onClick={() => clickHandler(id)}
        onKeyDown={(e) => keyDownHandler(e, id)}
        className={`tab tab--${variant} ${isSelected ? "tab--selected" : ""}`}
      >
        {text}
        {badge && <Badge text={badge.text} variant={badge.variant} />}
      </button>
    </li>
  );
}
