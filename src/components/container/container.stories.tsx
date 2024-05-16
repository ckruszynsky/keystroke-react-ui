import React from "react"; // Import the React module
import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./container";
import { Card } from "../card";

const meta = {
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

const newsHeadlines = [
  "Apple buys Tesla",
  "Google buys Amazon",
  "Microsoft buys Facebook",
  "Facebook buys Google",
  "Amazon buys Apple",
  "Tesla buys Microsoft",
  "Apple buys Google",
  "Google buys Facebook",
  "Microsoft buys Amazon",
  "Facebook buys Tesla",
];

//generate random news content
const newsContent = [
  "Apple buys Tesla for $1 trillion. Apple has acquired Tesla for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Google buys Amazon for $1 trillion. Google has acquired Amazon for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Microsoft buys Facebook for $1 trillion. Microsoft has acquired Facebook for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Facebook buys Google for $1 trillion. Facebook has acquired Google for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Amazon buys Apple for $1 trillion . Amazon has acquired Apple for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Tesla buys Microsoft for $1 trillion. Tesla has acquired Microsoft for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Apple buys Google for $1 trillion. Apple has acquired Google for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Google buys Facebook for $1 trillion. Google has acquired Facebook for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Microsoft buys Amazon for $1 trillion . Microsoft has acquired Amazon for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
  "Facebook buys Tesla for $1 trillion. Facebook has acquired Tesla for $1 trillion in an all-stock deal. The deal is expected to close in the next few months.",
];

const imageSearch = [
  "city,night",
  "technology",
  "business",
  "coding",
  "subway",
];

const childrenContent = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {newsHeadlines.map((headline, index) => {
        const randomIndex = Math.floor(Math.random() * imageSearch.length);
        return (
          <Card
            key={index}
            imgSrc={`https://source.unsplash.com/random/?${imageSearch[randomIndex]}`}
            imgAlt="Random image"
          >
            <Card.Header>{headline}</Card.Header>
            <Card.Content>{newsContent[index]}</Card.Content>
          </Card>
        );
      })}
    </div>
  );
};

export const Default: Story = {
  args: {
    children: childrenContent(),
    className: "bg-gray-100 dark:bg-gray-800",
    variant: "default",
  },
} satisfies Story;

export const Full: Story = {
  args: {
    children: childrenContent(),
    className: "bg-gray-100 dark:bg-gray-800",
    variant: "full",
  },
} satisfies Story;

export const Padded: Story = {
  args: {
    children: childrenContent(),
    className: "bg-gray-100 dark:bg-gray-800",
    variant: "padded",
  },
} satisfies Story;
