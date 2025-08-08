import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Footer } from './Footer';
import { FooterProps } from './Footer.types';

const columns: FooterProps['columns'] = [
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
];

const copyright: FooterProps['copyright'] = [
  { content: <p>© 2025 Jenna Li</p> },
  { content: <p>Canada</p> },
  { content: <p>Canada</p> },
  { content: <p>❋</p> },
];

describe('Footer Component', () => {
  test('renders footer container', () => {
    render(<Footer columns={columns} copyright={copyright} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeVisible();
  });

  test('renders all column titles', () => {
    render(<Footer columns={columns} copyright={copyright} />);
    expect(screen.getByText('NAVIGATION')).toBeVisible();
    expect(screen.getByText('CONNECT')).toBeVisible();
  });

  test('renders all links', () => {
    render(<Footer columns={columns} copyright={copyright} />);
    columns.forEach((col) => {
      col.links?.forEach((link) => {
        const matcher = (content: string) =>
          content.replace(/\s+/g, ' ').trim() === link.label.replace(/\s+/g, ' ').trim();

        expect(screen.getByText(matcher)).toBeVisible();
      });
    });
  });

  test('renders copyright content', () => {
    render(<Footer columns={columns} copyright={copyright} />);
    expect(screen.getByText(/© 2025 Jenna Li/i)).toBeVisible();
    expect(screen.getAllByText(/Canada/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/❋/i)).toBeVisible();
  });

  test('renders connect section with hello link', () => {
    render(<Footer columns={columns} copyright={copyright} />);
    expect(screen.getByText(/Want to connect\? Come say/i)).toBeVisible();

    const helloLink = screen.getByRole('link', { name: /hello/i });
    expect(helloLink).toBeVisible();
    expect(helloLink).toHaveAttribute('href', '/contact');
  });
});
