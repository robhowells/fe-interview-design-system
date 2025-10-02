import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs from "./Tabs";

const meta = {
  title: "Components/organisms/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Pill: Story = {
  args: {
    data: [
      {
        id: 1,
        text: "Emails",
        content: "Tab 1 content",
        badge: {
          text: "Info",
          variant: "neutral",
        },
      },
      {
        id: 2,
        text: "Files",
        content: "Tab 2 content",
        badge: {
          text: "Success",
          variant: "positive",
        },
      },
      {
        id: 3,
        text: "Edits",
        content: "Tab 3 content",
        badge: {
          text: "Warning",
          variant: "negative",
        },
      },
      {
        id: 4,
        text: "Downloads",
        content: "Tab 4 content",
      },
      {
        id: 5,
        text: "Documents",
        content: "Tab 5 content",
      },
    ],
    variant: "pill",
  },
};

export const Underline: Story = {
  args: {
    ...Pill.args,
    variant: "underline",
  },
};
