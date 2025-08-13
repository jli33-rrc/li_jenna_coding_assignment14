import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardCollectionProps } from './Card.types';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColour: { control: 'color' },
    fontColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cards: [
      {
        title: 'CARD TITLE',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Cat%2C_Standard_Orange_Tabby.jpg',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        button: 'LINK 🡢',
        buttonLink: '#',
      },
      {
        title: 'CARD TITLE',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        button: 'LINK 🡢',
        buttonLink: '#',
      },
      {
        title: 'CARD TITLE',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Cat_%28Felis_catus%29_-_Oslo%2C_Norway_2021-05-20.jpg',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        button: 'LINK 🡢',
        buttonLink: '#',
      },
    ],
    backgroundColour: '#FFFAF5',
    fontColour: '#353433',
  } as CardCollectionProps,
};
