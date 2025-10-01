import TabPanel from "../../molecules/TabPanel/TabPanel";
import { TabDataItemProps } from "../Tabs/Tabs.tsx";

export interface TabPanelListProps {
  data: TabDataItemProps[];
  selected: number;
}

export default function TabPanelList({ data, selected }: TabPanelListProps) {
  return (
    <div>
      {data.map((tab) => (
        <TabPanel
          key={`tab-panel${tab.id}`}
          id={tab.id}
          content={tab.content}
          selected={selected}
        />
      ))}
    </div>
  );
}
