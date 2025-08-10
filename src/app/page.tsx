import * as React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          ❋ Jenna Li is a graphic designer and full stack web developer passionate about crafting fresh, inclusive
          digital experiences. She is committed to making ethical, meaningful work that creates positive change.
        </h1>

        <section className={styles.basicInformation}>
          <h2>ABOUT</h2>
          <p>
            Jenna Li is a graphic designer and full stack web developer based in Winnipeg, Canada. She is interested in
            building new experiences and fresh perspectives through printed publications, brand experience, web
            development, illustration, and printmaking. Her aim is to collaborate with individuals and businesses who
            make a positive impact and believe in creating meaningful work that is ethical, accessible, and inclusive.
          </p>

          <p>
            Jenna is currently studying Full Stack Web Development at RRC Polytech. In her free time, she plays her
            favourite MMO game.
          </p>
        </section>
      </main>
    </div>
  );
}
