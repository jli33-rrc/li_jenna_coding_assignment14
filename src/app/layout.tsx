import * as React from 'react';
import type { Metadata } from 'next';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jenna Li',
  description: 'Portfolio website',
};

const navLinks = [{ label: 'CONTACT', href: '/contact' }];

const footerColumns = [
  { logo: { label: 'Jenna Li', href: '/' } },
  {
    title: 'NAVIGATION',
    links: [{ label: 'Contact', href: '#' }],
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
  {
    links: [{ label: 'Top 🡡', href: '#top' }],
  },
];

const footerCopyright = [{ content: '© 2025 Jenna Li' }, { content: '' }, { content: 'Canada' }, { content: '❋' }];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar links={navLinks} backgroundColor="#FFFAF5" fontColor="#353433" />
        {children}
        <Footer columns={footerColumns} copyright={footerCopyright} backgroundColor="#FFFAF5" fontColor="#353433" />
      </body>
    </html>
  );
}
