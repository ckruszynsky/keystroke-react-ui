import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import type { Preview } from "@storybook/react";
import "../src/index.css";

const decorators = [
  (Story) => (
    <Router>
      <Story />
    </Router>
  ),
];

const preview: Preview = {
  tags: ["autodocs"],
  decorators: decorators,
};

export default preview;
