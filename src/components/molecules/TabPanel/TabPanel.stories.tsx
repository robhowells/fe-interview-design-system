import type { Meta, StoryObj } from "@storybook/react-vite";
import TabPanel from "./TabPanel";

const meta = {
  title: "Components/molecules/Tab panel",
  component: TabPanel,
} satisfies Meta<typeof TabPanel>;

export default meta;
type Story = StoryObj<typeof TabPanel>;

export const Default: Story = {
  args: {
    content: "Tab 1 content",
  },
};
