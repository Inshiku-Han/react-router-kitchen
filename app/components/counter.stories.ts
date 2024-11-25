import type { Meta, StoryObj } from '@storybook/react';

import Counter from './counter';

export default {
  component: Counter,
  title: 'Counter',
} satisfies Meta<typeof Counter>;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
