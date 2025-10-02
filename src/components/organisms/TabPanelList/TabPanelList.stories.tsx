import type { Meta, StoryObj } from "@storybook/react-vite";
import TabPanelList from "./TabPanelList";
import { Pill as TabStory } from "../Tabs/Tabs.stories";

const meta = {
  title: "Components/organisms/Tab panel list",
  component: TabPanelList,
} satisfies Meta<typeof TabPanelList>;

export default meta;
type Story = StoryObj<typeof TabPanelList>;

export const Default: Story = {
  args: {
    ...TabStory.args,
    selected: 1
  },
};
