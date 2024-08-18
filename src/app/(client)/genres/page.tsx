"use client";

import React, { useState, useEffect } from 'react';
import { getGenres, getMoviesByGenre } from '@/services/api.service';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from "@/app/page.module.css";
import genresStyles from './Genres.module.css';

const GenresPage = () => {
    const searchParams = useSearchParams();
    const initialGenre = searchParams.get('selectedGenre');


    const [genres, setGenres] = useState<any[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(initialGenre ? parseInt(initialGenre, 10) : null);
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genresData = await getGenres();
            setGenres(genresData);
        };

        fetchGenres();
    }, []);

    useEffect(() => {
        // Перевіряємо, чи є selectedGenre числом
        if (selectedGenre !== null && !isNaN(selectedGenre)) {
            const fetchMovies = async () => {
                const moviesData = await getMoviesByGenre(selectedGenre);
                setMovies(moviesData);
            };

            fetchMovies();
        }
    }, [selectedGenre]);

    return (
        <div>
            <div className={styles.treeNavigation}>
                <Link style={{ marginRight: '20px' }} href="/moives" passHref>
                    <img
                        src="https://img.icons8.com/flat-round/64/back--v1.png"
                        alt="Back Arrow Icon"
                        style={{ width: '24px', height: '24px' }}
                    />
                </Link>
                <Link className={styles.linkNavigation} style={{ color: 'inherit' }} href='/'>HOME</Link>
                <Link className={styles.linkNavigation} style={{ color: 'inherit' }} href='/moives'>MOVIES</Link>
                <Link className={styles.linkNavigation} style={{ color: '#20bcc6' }} href='/genres'>GENRES</Link>
            </div>

            <div style={{ display: 'flex' }}>

                {/* Ліва панель з жанрами */}
                <div className={genresStyles.genreLeftContainer}>
                    <h1 style={{ textAlign: 'center' }}>Movie Genres</h1>
                    <ul style={{ listStyleType: 'none', padding: '30px' }}>
                        {genres.map(genre => (
                            <li key={genre.id} style={{ marginBottom: '10px' }}>
                                <button
                                    onClick={() => setSelectedGenre(genre.id)}
                                    style={{
                                        backgroundColor: selectedGenre === genre.id ? '#0070f3' : 'transparent',
                                        color: selectedGenre === genre.id ? 'white' : '#20bcc6',
                                    }}
                                    className={genresStyles.buttonLeft}
                                >
                                    {genre.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Права панель з фільмами */}
                <div style={{ width: '75%', padding: '0 30px 30px 30px' }}>
                    <div className={genresStyles.moviesRight}>
                        {movies.map(movie => (
                            <Link style={{ textDecoration: 'none' }} key={movie.id} href={`/moives/${movie.id}`}>
                                <div className={genresStyles.genreRightTitle} style={{ cursor: 'pointer' }}>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        width={200}
                                        height={300}
                                    />
                                    <h3 style={{ color: '#20bcc6' }}>{movie.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenresPage;
