import * as React from 'react';
import styles from './page.module.css';

function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Codin 1</h1>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
