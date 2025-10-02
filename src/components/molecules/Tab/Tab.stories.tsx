import type { Meta, StoryObj } from "@storybook/react-vite";
import Tab from "./Tab";
import "./Tab.css";

const meta = {
  title: "Components/molecules/Tab",
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Pill: Story = {
  args: {
    text: "Emails",
    variant: "pill",
    id: 1,
    selected: 2,
  },
};

export const PillSelected: Story = {
  args: {
    ...Pill.args,
    selected: 1,
  },
};

export const PillWithBadge: Story = {
  args: {
    ...Pill.args,
    badge: {
      text: "Info",
      variant: "neutral",
    },
  },
};

export const PillSelectedWithBadge: Story = {
  args: {
    ...PillWithBadge.args,
    selected: 1,
  },
};

export const Underline: Story = {
  args: {
    text: "Emails",
    variant: "underline",
    id: 1,
    selected: 2,
  },
};

export const UnderlineSelected: Story = {
  args: {
    ...Underline.args,
    selected: 1,
  },
};

export const UnderlineWithBadge: Story = {
  args: {
    ...Underline.args,
    badge: {
      text: "Info",
      variant: "neutral",
    },
  },
};

export const UnderlineSelectedWithBadge: Story = {
  args: {
    ...UnderlineWithBadge.args,
    selected: 1,
  },
};
