import Tab from "../../molecules/Tab/Tab";
import "./TabList.css";
import * as React from "react";
import { TabDataItemProps } from "../Tabs/Tabs.tsx";

export interface TabListProps {
  data: TabDataItemProps[];
  selected: number;
  variant: string;
  clickHandler: (index: number) => void;
  keyDownHandler: (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => void;
}

export default function TabList({
  data,
  selected,
  variant,
  clickHandler,
  keyDownHandler,
}: TabListProps) {
  const titleId = `tab-type-${variant}-title`;
  return (
    <>
      <h2 id={titleId}>Tab type: {variant}</h2>
      <ul
        className={`tab-list tab-list--${variant}`}
        role="tablist"
        aria-orientation="horizontal"
        aria-labelledby={titleId}
      >
        {data.map((tab) => {
          const tabProps = {
            ...(tab.badge && {
              badge: tab.badge
            })
          }
          return (
            <Tab
              key={`tab-${tab.id}`}
              index={tab.id}
              text={tab.text}
              selected={selected}
              variant={variant}
              clickHandler={clickHandler}
              keyDownHandler={keyDownHandler}
              {...tabProps}
            />
          )
        })}
      </ul>
    </>
  );
}
