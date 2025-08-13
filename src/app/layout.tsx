import * as React from 'react';
import type { Metadata } from 'next';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jenna Li',
  description: 'Portfolio website',
  icons: {
    icon: '/JennaLi_favicon-02.png',
  },
};

const navLinks = [
  { label: 'SKILLS', href: '/skills' },
  { label: 'RESOURCES', href: '/resources' },
];

const footerColumns = [
  { logo: { label: 'Jenna Li', href: '/' } },
  {
    title: 'NAVIGATION',
    links: [
      { label: 'Skills', href: '/skills' },
      { label: 'Resources', href: '/resources' },
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
  {
    links: [{ label: 'Top 🡡', href: '#top' }],
  },
];

const footerCopyright = [{ content: '© 2025 Jenna Li' }, { content: '' }, { content: 'Canada' }, { content: '❋' }];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar links={navLinks} backgroundColour="#FFFAF5" fontColour="#353433" />
        {children}
        <Footer columns={footerColumns} copyright={footerCopyright} backgroundColour="#FFFAF5" fontColour="#353433" />
      </body>
    </html>
  );
}
