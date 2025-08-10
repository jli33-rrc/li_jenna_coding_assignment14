import { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';
import { NavigationBarProps } from './NavigationBar.types';

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  argTypes: {
    backgroundColour: { control: 'color' },
    fontColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<NavigationBarProps>;

const sampleLinks = [
  /* { label: 'Home', href: '/' }, */
  { label: 'ABOUT', href: '/about' },
  { label: 'WORK', href: '/work' },
  { label: 'CONTACT', href: '/contact' },
];

export const Default: Story = {
  args: {
    links: sampleLinks,
    backgroundColour: '#FFFAF5',
    fontColour: '#353433',
  },
};
