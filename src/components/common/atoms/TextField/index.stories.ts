import { Meta, StoryObj } from '@storybook/react';
import TextField from './index';

const config: Meta<typeof TextField> = {
  title: 'Components/Common/atoms/TextField',
  component: TextField,
  args: { placeholder: 'Text' },
};

export default config;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {},
};
