"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { RootState } from '@/store/store';
import { getMoviesBySearchQuery } from '@/services/api.service'; // Імпорт функції пошуку
import styles from './HeaderComponent.module.css';
import Image from 'next/image';

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };


//
// const HeaderComponent = () => {
//     const dispatch = useDispatch();
//     const theme = useSelector((state: RootState) => state.theme.theme);
//     const [searchQuery, setSearchQuery] = useState('');
//     const router = useRouter();
//
//     const handleToggleTheme = () => {
//         dispatch(toggleTheme());
//     };
//
//     const handleSearch = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         if (searchQuery.trim()) {
//             try {
//                 // Шукаємо фільми за назвою
//                 const movies = await getMoviesBySearchQuery(searchQuery);
//
//                 if (movies.length > 0) {
//                     // Перенаправляємо на сторінку першого знайденого фільму
//                     router.push(`/movies/${movies[0].id}`);
//                 } else {
//                     alert('No movies found with this title');
//                 }
//             } catch (error) {
//                 console.error('Error searching for movies:', error);
//             }
//         }
//     };
//


    return (
        <div className={`${styles.header} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div>
                <img
                    src="/LOGO.jpg"
                    alt="Logo"
                    style={{height: '74px', marginRight: '80px'}}
                />
            </div>

            <div>
                <Link className={styles.link} href='/'>HOME</Link>
                <Link className={styles.link} href='/moives'>MOVIES</Link>
                <Link className={styles.link} href='/genres'>GENRES</Link>
            </div>

            <div style={{
                position: 'absolute',
                right: '50px',
                display: 'flex',
            }}>
                <form onSubmit={handleSearch} style={{margin: '20px'}}>
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button type="submit">Search</button>
                </form>


                <Link href="/login" passHref style={{margin: '20px'}}>
                    <img
                        src=" https://img.icons8.com/fluency/48/user-male-circle--v1.png"
                        alt="Login"
                        style={{width: '24px', height: '24px'}}
                    />
                </Link>

                <button onClick={handleToggleTheme} style={{borderRadius: '5px', padding: '5px',  height: '30px', marginTop: '15px'}}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>

        </div>
</div>
)
    ;
};

export default HeaderComponent;
