import type { Preview } from '@storybook/react';
import React from 'react';
import { suit } from '../src/styles/fonts';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { className: suit.variable },
        React.createElement(Story, null),
      ),
  ],
};

export default preview;
