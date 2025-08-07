import { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';
import { NavigationBarProps } from './NavigationBar.types';

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<NavigationBarProps>;

const sampleLinks = [
  /* { label: 'Home', href: '/' }, */
  { label: 'SKILLS', href: '/skills' },
  { label: 'RESOURCES', href: '/resources' },
];

export const Default: Story = {
  args: {
    links: sampleLinks,
    backgroundColor: '#FFFAF5',
    fontColor: '#353433',
  },
};
