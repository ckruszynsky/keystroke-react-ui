import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    children: "Read More",
    size: "md",
    variant: "ghost",
    icon: (
      <ArrowLeftIcon
        className="w-5 h-5"
        style={{ transform: "rotate(180deg)" }}
      />
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    variant: "default",
    disabled: true,
  },
};
export const Loading: Story = {
  args: {
    children: "Button",
    isLoading: true,
  },
};
