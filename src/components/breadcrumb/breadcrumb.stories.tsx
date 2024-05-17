import { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "./breadcrumb";
import { BreadcrumbItem } from "./breadcrumbItem";
import { HomeIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { name: "Home", href: "#", current: false },
      { name: "About", href: "#", current: false },
      { name: "Contact", href: "#", current: true },
    ],
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    items: [
      { name: "Home", href: "#", current: false },
      { name: "About", href: "#", current: false },
      { name: "Contact", href: "#", current: true },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    variant: "fullWidth",
    items: [
      { name: "Home", href: "#", current: false },
      { name: "About", href: "#", current: false },
      { name: "Contact", href: "#", current: true },
    ],
  },
};
