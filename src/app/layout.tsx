import * as React from 'react';
import type { Metadata } from 'next';
import { NavigationBar } from '../components/NavigationBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jenna Li',
  description: 'Portfolio website',
};

const navLinks = [{ label: 'CONTACT', href: '/contact' }];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar links={navLinks} backgroundColor="#FFFAF5" fontColor="#353433" />
        {children}
      </body>
    </html>
  );
}
