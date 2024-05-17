import { Meta, StoryObj } from "@storybook/react";

import { PageHeading } from "./page-heading";
import { Button } from "../button";
import { Breadcrumb } from "../breadcrumb";
import exp from "constants";
import {
  BackpackIcon,
  DrawingPinIcon,
  EyeOpenIcon,
  HomeIcon,
  MobileIcon,
} from "@radix-ui/react-icons";

const meta: Meta<typeof PageHeading> = {
  component: PageHeading,
};

export default meta;

type Story = StoryObj<typeof PageHeading>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    onRenderActions: () => (
      <div className="flex space-x-4">
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    ),
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: "Dashboard",
    onRenderBreadcrumbs: () => (
      <Breadcrumb
        items={[
          { name: "Home", href: "#", current: false },
          { name: "About", href: "#", current: false },
          { name: "Contact", href: "#", current: true },
        ]}
      />
    ),
    onRenderActions: () => (
      <div className="flex space-x-4">
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    ),
  },
};

export const WithMeta: Story = {
  args: {
    title: "Dashboard",
    onRenderActions: () => (
      <div className="flex space-x-4">
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    ),
    onRenderMeta: () => (
      <>
        <div className="flex items-center mt-2 mr-2 text-sm text-gray-500">
          <BackpackIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />{" "}
          Full-time
        </div>
        <div className="flex items-center mt-2 mr-2 text-sm text-gray-500">
          <DrawingPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />{" "}
          Remote
        </div>
        <div className="flex items-center mt-2 mr-2 text-sm text-gray-500">
          <MobileIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />{" "}
          $120k – $140k
        </div>
        <div className="flex items-center mt-2 mr-2 text-sm text-gray-500">
          <HomeIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" /> 1
          day ago
        </div>
        <div className="flex items-center mt-2 mr-2 text-sm text-gray-500">
          <EyeOpenIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />{" "}
          1,234 views
        </div>
      </>
    ),
  },
};
