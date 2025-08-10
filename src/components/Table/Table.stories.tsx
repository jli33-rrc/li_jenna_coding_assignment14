import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableProps } from './Table.types';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    hoverable: { control: 'boolean' },
    backgroundColour: { control: 'color' },
    fontColour: { control: 'color' },
    headerBackgroundColour: { control: 'color' },
    footerBackgroundColour: { control: 'color' },
    hoverColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    headers: ['HEADER', 'HEADER', 'HEADER'],
    rows: [
      ['Row', 'Lorem ipsum', 'Lorem ipsum'],
      ['Row', 'Lorem ipsum', 'Lorem ipsum'],
      ['Row', 'Lorem ipsum', 'Lorem ipsum'],
    ],
    footer: ['FOOTER', 'FOOTER', 'FOOTER'],
    hoverable: true,
    backgroundColour: '#FFFAF5',
    fontColour: '#353433',
    headerBackgroundColour: '#FFFAF5',
    footerBackgroundColour: '#FFFAF5',
    hoverColour: '#D4D0CC',
  },
};
