import { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '.';

const meta = {
  title: 'Components/Common/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
