import { Meta, StoryObj } from "@storybook/react";
import { List } from "./list";
import { action } from "@storybook/addon-actions";
import { Card } from "../card/card";
import { Container } from "../container";
import { Divider } from "../divider";

const meta: Meta<typeof List> = {
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <div className="flex justify-center">
      <List className="w-48">
        <List.ListItem
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
        <List.ListItem
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
        <List.ListItem
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
      </List>
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div className="flex justify-center">
      <List border className="w-48">
        <List.ListItem
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
        <List.ListItem
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
        <List.ListItem
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
      </List>
    </div>
  ),
};

export const Separated: Story = {
  render: () => (
    <div className="flex justify-center">
      <List separate className="w-48 space-y-1">
        <List.ListItem
          separate
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
        <List.ListItem
          separate
          padding="small"
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
        <List.ListItem
          padding="small"
          separate
          className="hover:cursor-pointer hover:bg-primary-600 hover:text-white"
        >
          <span className="font-semibold text-md">Title</span>
        </List.ListItem>
      </List>
    </div>
  ),
};

export const CardList: Story = {
  render: () => {
    return (
      <div className="flex justify-center mx-auto">
        <List className="max-w-lg m-6 bg-accent" border>
          <List.ListItem>
            <Card imgSrc="https://source.unsplash.com/random/?city,night">
              <Card.Header>News Headline</Card.Header>
              <Card.Content
                callToActionText="Read more"
                onCallToActionClick={action("call to action clicked")}
              >
                Facebook buys Google for $1 trillion. Facebook has acquired
                Google for $1 trillion in an all-stock deal.The deal is expected
                to close in the next few months.
              </Card.Content>
            </Card>
          </List.ListItem>
          <List.ListItem>
            <Card imgSrc="https://source.unsplash.com/random/?coding">
              <Card.Header>
                A very long title that should be truncated
              </Card.Header>
              <Card.Content>
                Facebook buys Google for $1 trillion. Facebook has acquired
                Google for $1 trillion in an all-stock deal. The deal is
                expected to close in the next few months.
              </Card.Content>
            </Card>
          </List.ListItem>
        </List>
      </div>
    );
  },
};
