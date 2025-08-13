import * as React from 'react';
import styles from './page.module.css';
import type { Metadata } from 'next';
import { Table } from '../../components/Table';

export const metadata: Metadata = {
  title: 'Jenna Li – Skills',
  icons: {
    icon: '/JennaLi_favicon-02.png',
  },
};

const rows = [
  ['PROGRAMMING LANGUAGES', 'HTML5, CSS3, JavaScript, Java, PHP, Python, Ruby'],
  ['FRAMEWORKS', 'React, Next.js, Ruby on Rails'],
  ['DATABASE SYSTEMS', 'MySQL (phpMyAdmin), PostgreSQL'],
  ['TOOLS', 'GitHub, Git'],
  ['PROGRAMS', 'Visual Studio Code, Adobe Creative Cloud Suite, Microsoft Office 365'],
];

export default function Skills() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>❋ SKILLS</h1>

        <section className={styles.skills}>
          <h2>DESCRIPTION</h2>
          <p>
            Jenna has a background in graphic design, studio operations, and digital production, combining coding
            technologies with design expertise to create innovative web-based solutions. She bridges the gap between
            visual design and technical implementation, producing visually engaging, user-friendly digital experiences
            that balance aesthetics with functionality.
          </p>
        </section>

        <section>
          <Table rows={rows} hoverable={true} boldFirstCell={true} backgroundColour="#FFFAF5" fontColour="#353433" />
        </section>
      </main>
    </div>
  );
}
