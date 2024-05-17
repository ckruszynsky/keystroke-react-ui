import { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";
import {
  BellIcon,
  BookmarkIcon,
  CheckIcon,
  CircleBackslashIcon,
  ClockIcon,
  CommitIcon,
  CrossCircledIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  LockOpen1Icon,
  PersonIcon,
  StopIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <div className="w-full mx-auto bg-white bg-gradient-to-r dark:bg-gray-900">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <Badge color="info">Badge</Badge>
        <Badge color="secondary">Badge</Badge>
        <Badge color="failure">Badge</Badge>
        <Badge color="success">Badge</Badge>
        <Badge color="warning">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="purple">Badge</Badge>
        <Badge color="pink">Badge</Badge>
        <Badge color="cyan">Badge</Badge>
        <Badge color="teal">Badge</Badge>
        <Badge color="emerald">Badge</Badge>
        <Badge color="lime">Badge</Badge>
        <Badge color="sky">Badge</Badge>
        <Badge color="violet">Badge</Badge>
        <Badge color="fuchsia">Badge</Badge>
        <Badge color="rose">Badge</Badge>
        <Badge color="slate">Badge</Badge>
      </div>
    </div>
  ),
};

export const Bordered: Story = {
  args: {
    border: "border",
    children: "Badge",
    color: "info",
  },
};

export const Sizes: Story = {
  args: {
    children: "Badge",
    color: "info",
    size: "xl",
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="w-full mx-auto bg-white bg-gradient-to-r dark:bg-gray-900">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <Badge color="info" icon={<InfoCircledIcon />}>
          Reminder
        </Badge>
        <Badge color="failure" icon={<CrossCircledIcon />}>
          Alert
        </Badge>
        <Badge color="success" icon={<CheckIcon />}>
          Success
        </Badge>
        <Badge color="warning" icon={<ExclamationTriangleIcon />}>
          Warning
        </Badge>
        <Badge color="secondary" icon={<EnvelopeOpenIcon />}>
          Notification
        </Badge>
        <Badge color="indigo" icon={<BellIcon />}>
          Message
        </Badge>
        <Badge color="purple" icon={<StopwatchIcon />}>
          Error
        </Badge>
        <Badge color="pink" icon={<ClockIcon />}>
          Schedule
        </Badge>
        <Badge color="cyan" icon={<CircleBackslashIcon />}>
          Blocked
        </Badge>
        <Badge color="teal" icon={<CommitIcon />}>
          Commit
        </Badge>
        <Badge color="emerald" icon={<LockOpen1Icon />}>
          Unlocked
        </Badge>
        <Badge color="lime" icon={<PersonIcon />}>
          User
        </Badge>
        <Badge color="sky" icon={<BookmarkIcon />}>
          Bookmark
        </Badge>
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="w-full mx-auto bg-white bg-gradient-to-r dark:bg-gray-900">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <Badge color="info" icon={<InfoCircledIcon />} />
        <Badge color="failure" icon={<CrossCircledIcon />} />
        <Badge color="success" icon={<CheckIcon />} />
        <Badge color="warning" icon={<ExclamationTriangleIcon />} />
        <Badge color="secondary" icon={<EnvelopeOpenIcon />} />
        <Badge color="indigo" icon={<BellIcon />} />
        <Badge color="purple" icon={<StopwatchIcon />} />
        <Badge color="pink" icon={<ClockIcon />} />
        <Badge color="cyan" icon={<CircleBackslashIcon />} />
        <Badge color="teal" icon={<CommitIcon />} />
        <Badge color="emerald" icon={<LockOpen1Icon />} />
        <Badge color="lime" icon={<PersonIcon />} />
        <Badge color="sky" icon={<BookmarkIcon />} />
      </div>
    </div>
  ),
};

export const WithLink: Story = {
  render: () => (
    <div className="w-full mx-auto bg-white bg-gradient-to-r dark:bg-gray-900">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <Badge color="info" href="https://example.com">
          Badge
        </Badge>
        <Badge color="secondary" href="https://example.com">
          Badge
        </Badge>
        <Badge color="failure" href="https://example.com">
          Badge
        </Badge>
        <Badge color="success" href="https://example.com">
          Badge
        </Badge>
        <Badge color="warning" href="https://example.com">
          Badge
        </Badge>
        <Badge color="indigo" href="https://example.com">
          Badge
        </Badge>
        <Badge color="purple" href="https://example.com">
          Badge
        </Badge>
        <Badge color="pink" href="https://example.com">
          Badge
        </Badge>
        <Badge color="cyan" href="https://example.com">
          Badge
        </Badge>
        <Badge color="teal" href="https://example.com">
          Badge
        </Badge>
        <Badge color="emerald" href="https://example.com">
          Badge
        </Badge>
        <Badge color="lime" href="https://example.com">
          Badge
        </Badge>
        <Badge color="sky" href="https://example.com">
          Badge
        </Badge>
        <Badge color="violet" href="https://example.com">
          Badge
        </Badge>
        <Badge color="fuchsia" href="https://example.com">
          Badge
        </Badge>
        <Badge color="rose" href="https://example.com">
          Badge
        </Badge>
        <Badge color="slate" href="https://example.com">
          Badge
        </Badge>
      </div>
    </div>
  ),
};
