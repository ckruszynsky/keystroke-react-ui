import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { ButtonGroup } from "./buttonGroup";
import { Outline } from "./button.stories";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    children: [
      <Button variant="outline" key="1">
        Button 1
      </Button>,
      <Button variant="outline" key="2">
        Button 2
      </Button>,
      <Button variant="outline" key="3">
        Button 3
      </Button>,
    ],
  },
};
