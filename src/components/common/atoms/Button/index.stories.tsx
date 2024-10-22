import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Components/Common/atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Text',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Text',
    disabled: true,
  },
};
