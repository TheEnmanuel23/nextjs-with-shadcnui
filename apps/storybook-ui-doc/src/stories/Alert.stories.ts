import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "ui";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "This a default alert component",
  },
};

export const Destructive: Story = {
  args: {
    children: "This a default alert component",
    variant: "destructive",
  },
};
