import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/button/Button.native'

// Config
//

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button'
};

export default meta;
type Story = StoryObj<typeof Button>;

// Stories
//

export const ButtonComponent: Story = {
  render: () => <Button onPress={() => console.log('Clicked!')}>Submit</Button>,
};