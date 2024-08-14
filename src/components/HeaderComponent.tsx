"use client"; // Додаємо директиву для клієнтського компонента

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { RootState } from '@/store/store';
import styles from './HeaderComponent.module.css';
import Image from "next/image";

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className={`${styles.header} ${theme === 'dark' ? styles.dark : styles.light}`}>


            <div>
                <img
                    src="/LOGO.jpg"
                    alt="Logo"
                    style={{ height: '74px', marginRight: '80px'}}
                />
            </div>

            <div>
                <Link className={styles.link} href='/'>HOME</Link>
                <Link className={styles.link} href='/moives'>MOVIES</Link>
                <Link className={styles.link} href='/genres'>GENRES</Link>
            </div>


            <div  style={{
                position: 'absolute',
                right: '50px',
            }} >
                <Link className={styles.link} href="/" passHref>
                    <img
                        src=" https://img.icons8.com/color/48/search--v1.png"
                        alt="Search"
                        style={{width: '24px', height: '24px', }}
                    />
                </Link>


                <Link href="/login" passHref style={{margin: '20px'}} >
                    <img
                        src=" https://img.icons8.com/fluency/48/user-male-circle--v1.png"
                        alt="Login"
                        style={{width: '24px', height: '24px'}}
                    />
                </Link>

                <button onClick={handleToggleTheme} style={{borderRadius: '5px', padding: '5px',   marginBottom: '6px' }}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>


        </div>
    );
};

export default HeaderComponent;
