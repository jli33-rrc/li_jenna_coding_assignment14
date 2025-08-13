import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Card } from './Card';

const Cards = [
  {
    title: 'Card One',
    body: 'This is the first card body.',
    src: '/image1.jpg',
    alt: 'First Card Image',
    button: 'Learn More',
    buttonLink: 'https://example.com/1',
  },
  {
    title: 'Card Two',
    body: 'This is the second card body.',
    src: '/image2.jpg',
    alt: 'Second Card Image',
    button: 'Visit',
    buttonLink: 'https://example.com/2',
  },
];

describe('Card Component', () => {
  test('renders the correct number of cards', () => {
    render(<Card cards={Cards} />);
    const cardTitles = screen.getAllByText(/Card/);
    expect(cardTitles).toHaveLength(Cards.length);
  });

  test('renders images with correct alt text', () => {
    render(<Card cards={Cards} />);
    Cards.forEach((card) => {
      const img = screen.getByAltText(card.alt);
      expect(img).toBeVisible();
    });
  });

  test('renders card buttons with correct labels', () => {
    render(<Card cards={Cards} />);
    Cards.forEach((card) => {
      expect(screen.getByText(card.button)).toBeVisible();
    });
  });

  test('applies custom background and font colors', () => {
    render(<Card cards={Cards} backgroundColour="#FFFAF5" fontColour="#353433" />);
    const firstCard = screen.getByText('Card One').parentElement;
    expect(firstCard).toHaveStyle('background-color: #FFFAF5');
    expect(firstCard).toHaveStyle('color: #353433');
  });
});
