import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";
import "./Badge.css";

const meta = {
  title: "Components/atoms/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    text: "Info",
    variant: "neutral",
  },
};

export const Positive: Story = {
  args: {
    text: "Success",
    variant: "positive",
  },
};

export const Negative: Story = {
  args: {
    text: "Warning",
    variant: "negative",
  },
};
