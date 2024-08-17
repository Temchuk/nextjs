"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { RootState } from '@/store/store';
import { getMoviesByTitle } from '@/services/api.service'; //  функція пошуку фільму за назвою
import styles from './HeaderComponent.module.css';
import Image from 'next/image';

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
    const [searchQuery, setSearchQuery] = useState('');
    const [isNotFound, setIsNotFound] = useState(false); // Додаємо стан для відсутності результату
    const router = useRouter();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            try {
                //  пошук фільмів за назвою
                const movies = await getMoviesByTitle(searchQuery);

                if (movies.length > 0) {
                    // Перенаправляємо на сторінку першого знайденого фільму
                    router.push(`/moives/${movies[0].id}`);
                    setIsNotFound(false); // Залишаємо поле незмінним, якщо фільм знайдено
                } else {
                    // Якщо фільм не знайдено, змінюємо текст і збільшуємо поле пошуку
                    setSearchQuery('Not found!!!');
                    setIsNotFound(true);
                }
            } catch (error) {
                console.error('Error searching for movies:', error);
                setSearchQuery('Not found!!!');
                setIsNotFound(true);
            }
        }
    };
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

            <div className={styles.loginSearch}>
                <form onSubmit={handleSearch}>

                    <input
                        type="text"
                        placeholder="Search movies... "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            height: isNotFound ? '50px' : '25px', // Збільшення поля пошуку при відсутності результату
                            width: '400px',
                            color: isNotFound ? 'red' : 'black',  // Зміна кольору тексту
                            fontSize: isNotFound ? '20px' : '14px',
                            textAlign: "center",
                            borderRadius: '10px',
                        }}
                    />
                    <button type="submit" style={{
                        backgroundColor: '#0070f3',
                        color: 'white',
                        height: '25px',
                        width: '60px',
                        borderRadius: '5px',
                        marginLeft: '5px',
                        // borderColor: '#0070f3'

                    }}>Sеarch
                    </button>


                </form>



                <Link  href="/login" passHref style={{margin: '0 10px'}}>
                    <button style={{
                        backgroundColor: '#0070f3',
                        color: 'white',
                        // padding: '10px 20px',
                        borderRadius: '5px',
                        // border: 'none',
                        cursor: 'pointer',
                        height: '25px',
                        width: '60px',
                        textAlign: "center",
                    }}>
                        Sing in
                    </button>
                </Link>

                <button onClick={handleToggleTheme}
                        style={{
                            borderRadius: '20px',
                            padding: '5px',
                            height: '30px',
                            width: '30px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                    <img
                        src={theme === 'light' ? '/moon.png' : '/sun.png'}
                        alt={theme === 'light' ? 'Sun Icon' : 'Moon Icon'}
                        style={{width: '100%', height: '100%', borderRadius: '20px'}}
                    />
                </button>

            </div>
        </div>
    )
        ;
};

export default HeaderComponent;


