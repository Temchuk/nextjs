"use client"; // Додаємо директиву для клієнтського компонента

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { RootState } from '@/store/store';
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className={`${styles.header} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <Link className={styles.link} href='/'>HOME</Link>
            <Link className={styles.link} href='/moives'>MOVIES</Link>
            <Link className={styles.link} href='/genres'>GENRES</Link>
            <Link className={styles.link} href='/search'>SEARCH</Link>
            <button onClick={handleToggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
};

export default HeaderComponent;
