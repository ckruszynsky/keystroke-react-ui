import { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./divider";
import {
  ChatBubbleIcon,
  PaperPlaneIcon,
  Pencil1Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { action } from "@storybook/addon-actions";
import exp from "constants";
import { Button } from "../button";

const meta: Meta<typeof Divider> = {
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    children: <Divider.Content>Label</Divider.Content>,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <Divider.Content>
        <PlusIcon
          className="w-6 h-6 hover:text-primary-500"
          onClick={action("Icon Clicked")}
        />
      </Divider.Content>
    ),
  },
};

export const WithLabelAndIcon: Story = {
  args: {
    children: (
      <>
        <Divider.Content>
          <div className="flex items-center hover:text-primary-500">
            <PlusIcon className="w-6 h-6 " onClick={action("Icon Clicked")} />{" "}
            Add New
          </div>
        </Divider.Content>
      </>
    ),
  },
};

export const WithLabelToLeft: Story = {
  args: {
    children: (
      <>
        <Divider.Content alignment="left">Label</Divider.Content>
      </>
    ),
  },
};

export const WithLabelToRight: Story = {
  args: {
    children: (
      <>
        <Divider.Content alignment="right">Label</Divider.Content>
      </>
    ),
  },
};

export const WithButton: Story = {
  args: {
    children: (
      <>
        <Divider.Content>
          <Button variant="ghost" onClick={action("Button Clicked")}>
            Button
          </Button>
        </Divider.Content>
      </>
    ),
  },
};

export const WithTitleAndButton: Story = {
  args: {
    children: (
      <>
        <Divider.Content alignment="between">
          <span className="pr-3 text-base font-semibold leading-6 text-gray-900 bg-white">
            Projects
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-50"
          >
            <PlusIcon
              className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Button text</span>
          </button>
        </Divider.Content>
      </>
    ),
  },
};

export const WithMultipleButtons: Story = {
  args: {
    children: (
      <>
        <Divider.Content alignment="between">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-50"
          >
            <PlusIcon
              className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Button text</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-50"
          >
            <PlusIcon
              className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Button text</span>
          </button>
        </Divider.Content>
      </>
    ),
  },
};

export const WithToolbar: Story = {
  args: {
    children: (
      <Divider.Content>
        <span className="inline-flex -space-x-px rounded-md shadow-sm isolate">
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-primary-50 focus:z-10"
          >
            <span className="sr-only">Edit</span>
            <Pencil1Icon
              className="w-5 h-5 hover:text-primary-500"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-primary-50 focus:z-10"
          >
            <span className="sr-only">Attachment</span>
            <PaperPlaneIcon
              className="w-5 h-5 hover:text-primary-500"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-primary-50 focus:z-10"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleIcon
              className="w-5 h-5 hover:text-primary-500"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-3 py-2 text-gray-400 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-primary-50 focus:z-10"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon
              className="w-5 h-5 hover:text-primary-500"
              aria-hidden="true"
            />
          </button>
        </span>
      </Divider.Content>
    ),
  },
};
