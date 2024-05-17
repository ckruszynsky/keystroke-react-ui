import { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const FullHeight: Story = {
  args: {
    fullHeight: true,
  },
};

export const WithText: Story = {
  args: {
    text: "Loading...",
  },
};

export const WithCustomText: Story = {
  args: {
    text: <h1 className="text-2xl font-bold">Loading...</h1>,
  },
};
