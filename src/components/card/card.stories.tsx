import { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";
import { action } from "@storybook/addon-actions";
import { Button } from "../button";
const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

//generate random news headline
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

const randomIndex = Math.floor(Math.random() * newsHeadlines.length);
export const Default: Story = {
  args: {
    onClick: action("Card Clicked"),
    children: (
      <>
        <Card.Header>{newsHeadlines[randomIndex]}</Card.Header>
        <Card.Content>{newsContent[randomIndex]}</Card.Content>
      </>
    ),
    className: "max-w-lg mx-auto",
  },
};

export const CallToAction: Story = {
  args: {
    children: (
      <>
        <Card.Header>{newsHeadlines[randomIndex]}</Card.Header>
        <Card.Content
          callToActionText="Read more"
          onClick={action("Call to action")}
        >
          {newsContent[randomIndex]}
        </Card.Content>
      </>
    ),
    className: "max-w-md mx-auto",
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <Card.Header>{newsHeadlines[randomIndex]}</Card.Header>
        <Card.Content>{newsContent[randomIndex]}</Card.Content>
      </>
    ),
    imgAlt: "News",
    imgSrc: "https://source.unsplash.com/random/800x600",
    className: "max-w-sm mx-auto",
    onClick: action("Image Card Clicked"),
  },
};

export const WithCustomRenderImage: Story = {
  args: {
    children: (
      <>
        <Card.Header>{newsHeadlines[randomIndex]}</Card.Header>
        <Card.Content>{newsContent[randomIndex]}</Card.Content>
      </>
    ),
    onRenderImage: () => (
      <img
        src="https://source.unsplash.com/random/800x600"
        alt="News"
        className="rounded-t-lg object-fit"
      />
    ),
    className: "max-w-sm mx-auto",
    onClick: action("Custom Image Card Clicked"),
  },
};

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    imgAlt: "News",
    imgSrc: "https://source.unsplash.com/random/800x600",
    children: (
      <>
        <Card.Header horizontal>{newsHeadlines[randomIndex]}</Card.Header>
        <Card.Content
          callToActionText="Read more"
          onCallToActionClick={action("Call to action clicked")}
        >
          {newsContent[randomIndex]}
        </Card.Content>
      </>
    ),
    className: "mx-auto max-w-lg",
  },
};

export const WithForm: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
          </div>
        </Card.Header>
        <form className="flex flex-col gap-4">
          <div>
            <div className="block mb-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="block mb-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="block mb-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <Button>Submit</Button>
        </form>
      </>
    ),
    className: "max-w-sm mx-auto",
  },
};

export const WithCustomHeader: Story = {
  args: {
    variant: "full",
    children: (
      <>
        <Card.Header className="px-2 py-4 rounded-t-sm bg-accent">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-center">
              Breaking News
            </h2>
          </div>
        </Card.Header>
        <Card.Content className="px-4 py-2">
          {newsContent[randomIndex]}
        </Card.Content>
      </>
    ),
    className: "max-w-sm mx-auto",
  },
};
