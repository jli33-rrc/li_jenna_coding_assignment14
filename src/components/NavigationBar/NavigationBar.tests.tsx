import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { NavigationBar } from './NavigationBar';

const links = [
  { label: 'ABOUT', href: '/about' },
  { label: 'WORK', href: '/work' },
  { label: 'CONTACT', href: '/contact' },
];

describe('NavigationBar Component', () => {
  test('renders the navigation bar and checks visibility', () => {
    render(<NavigationBar links={links} />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeVisible();
  });

  test('renders all provided links', () => {
    render(<NavigationBar links={links} />);
    links.forEach((link) => {
      expect(screen.getByText(link.label)).toBeVisible();
    });
  });

  test('applies custom background and font colors', () => {
    render(<NavigationBar links={links} backgroundColour="#FFFAF5" fontColour="#353433" />);

    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveStyle('background-color: #FFFAF5');

    const linkElement = screen.getByText('CONTACT');
    expect(linkElement).toHaveStyle('color: #353433');
  });
});
