import * as React from 'react';
import styles from './page.module.css';
import type { Metadata } from 'next';
import { Card } from '../../components/Card';

export const metadata: Metadata = {
  title: 'Jenna Li – Resources',
  icons: {
    icon: '/JennaLi_favicon-02.png',
  },
};

const cardsData = [
  {
    title: 'MDN WEB DOCS',
    body: 'MDN Web Docs is a free, community-driven resource that provides comprehensive documentation, tutorials, and references for web technologies like HTML, CSS, and JavaScript. Maintained by Mozilla with contributions from developers worldwide, it’s a trusted go-to for learning and mastering web development.',
    src: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/03/moz_blog_header_MDN-Intro.jpg',
    alt: 'MDN Web Docs',
    button: 'VIEW 🡢',
    buttonLink: 'https://developer.mozilla.org/en-US/',
  },
  {
    title: 'GOOGLE FONTS',
    body: 'Google Fonts is a free online library of open-source fonts that can be easily added to websites and apps. It offers hundreds of typefaces with customizable styles, optimized for fast loading and consistent display across devices.',
    src: 'https://cookiefirst.com/wp-content/uploads/2022/09/google-fonts-logo-gdpr.png',
    alt: 'Google Fonts',
    button: 'VIEW 🡢',
    buttonLink: 'https://fonts.google.com/',
  },
  {
    title: 'ADOBE COLOR',
    body: 'Adobe Color is a free online tool for creating, exploring, and sharing color palettes. It helps designers generate harmonious color schemes, extract palettes from images, and explore trending combinations for creative projects.',
    src: 'https://www.adobe.com/ca/products/media_1170b5c0e4166213cd695195cb06ddbcdd79f3306.png?width=750&format=png&optimize=medium',
    alt: 'Adobe Color',
    button: 'VIEW 🡢',
    buttonLink: 'https://color.adobe.com/create/color-wheel/',
  },
];

export default function Resources() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>❋ RESOURCES</h1>

        <section>
          <Card cards={cardsData} />
        </section>
      </main>
    </div>
  );
}
