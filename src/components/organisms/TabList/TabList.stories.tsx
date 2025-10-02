import type { Meta, StoryObj } from "@storybook/react-vite";
import TabList from "./TabList";
import { Pill as TabStory } from "../Tabs/Tabs.stories";

const meta = {
  title: "Components/organisms/Tab list",
  component: TabList,
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof TabList>;

export const Pill: Story = {
  args: {
    ...TabStory.args,
    selected: 1,
  },
};

export const Underline: Story = {
  args: {
    ...TabStory.args,
    variant: "underline",
    selected: 1,
  },
};
