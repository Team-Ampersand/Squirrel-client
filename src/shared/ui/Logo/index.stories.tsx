import { Meta, StoryObj } from '@storybook/react';
import Logo from '.';

const meta = {
  title: 'Components/Common/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
