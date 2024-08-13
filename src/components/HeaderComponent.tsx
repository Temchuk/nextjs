import React from 'react';
import Link from 'next/link';
import styles from './HeaderComponent.module.css'; // Правильний шлях до CSS-модуля

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <Link className={styles.link} href='/'>HOME</Link>
            <Link className={styles.link} href='/moives'>MOVIES</Link>
            <Link className={styles.link} href='/genres'>GENRES</Link>
            <Link className={styles.link} href='/search'>SEARCH</Link>
        </div>
    );
};

export default HeaderComponent;
