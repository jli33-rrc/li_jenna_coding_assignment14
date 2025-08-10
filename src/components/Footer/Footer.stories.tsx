import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { FooterProps } from './Footer.types';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    backgroundColour: { control: 'color' },
    fontColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    columns: [
      { logo: { label: 'Jenna Li', href: '/' } },
      {
        title: 'NAVIGATION',
        links: [
          { label: 'About', href: '#' },
          { label: 'Work', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'CONNECT',
        links: [
          { label: 'Instagram', href: '#' },
          { label: 'LinkedIn', href: '#' },
          { label: 'Behance', href: '#' },
          { label: 'Vimeo', href: '#' },
        ],
      },
      { links: [{ label: 'Top 🡡', href: '#top' }] },
    ],
    copyright: [
      { content: <p>© 2025 Jenna Li</p> },
      { content: <p>Canada</p> },
      { content: <p>Canada</p> },
      { content: <p>❋</p> },
    ],
    backgroundColour: '#FFFAF5',
    fontColour: '#353433',
  },
};
