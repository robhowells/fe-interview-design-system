import TabList from "../TabList/TabList";
import TabPanelList from "../TabPanelList/TabPanelList";
import { useState } from "react";
import "./Tabs.css";
import { BadgeProps } from "../../atoms/Badge/Badge.tsx";
import * as React from "react";

export interface TabDataItemProps {
  id: number;
  text: string;
  content: string;
  badge?: BadgeProps;
}

export interface TabProps {
  data: TabDataItemProps[];
  variant: string;
}

export default function Tabs({ data, variant }: TabProps) {
  const [selected, setSelected] = useState(data[0].id);

  const handleClick = (id: number) => {
    setSelected(id);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: number,
  ) => {
    const parentListItem = e.currentTarget.closest("li");
    const tabClassName = ".tab";
    switch (e.key) {
      case "Enter":
        setSelected(id);
        break;
      case "ArrowRight": {
        const isLast = data[data.length - 1].id === selected;
        if (!isLast) {
          const nextTabWrapper = parentListItem?.nextElementSibling;
          const nextTab = nextTabWrapper?.querySelector(
            tabClassName,
          ) as HTMLElement;
          nextTab.focus();
          setSelected(selected + 1);
        }
        break;
      }
      case "ArrowLeft": {
        const isFirst = data[0].id === selected;
        if (!isFirst) {
          const prevTabWrapper = parentListItem?.previousElementSibling;
          const prevTab = prevTabWrapper?.querySelector(
            tabClassName,
          ) as HTMLElement;
          prevTab.focus();
          setSelected(selected - 1);
        }
        break;
      }

      default:
    }
  };

  return (
    <div className="tabs">
      <TabList
        data={data}
        selected={selected}
        variant={variant}
        clickHandler={handleClick}
        keyDownHandler={handleKeyDown}
      />
      <TabPanelList data={data} selected={selected}/>
    </div>
  );
}
