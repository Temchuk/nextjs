"use client";

import React, { useState, useEffect } from 'react';
import { getGenres, getMoviesByGenre } from '@/services/api.service';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const GenresPage = () => {
    const searchParams = useSearchParams();
    const initialGenre = searchParams.get('selectedGenre'); // Отримуємо selectedGenre з URL
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
        if (selectedGenre !== null) {
            const fetchMovies = async () => {
                const moviesData = await getMoviesByGenre(selectedGenre);
                setMovies(moviesData);
            };

            fetchMovies();
        }
    }, [selectedGenre]);

    return (
        <div style={{ display: 'flex' }}>
            {/* Ліва панель з жанрами */}
            <div style={{
                width: '20%',
                padding: '20px',
                background: '#757578'
            }}>
                <h1 style={{ textAlign: 'center'}}>Movie Genres</h1>
                <ul style={{listStyleType: 'none', padding: '30px'}}>
                    {genres.map(genre => (
                        <li key={genre.id} style={{marginBottom: '10px'}}>
                            <button
                                onClick={() => setSelectedGenre(genre.id)}
                                style={{
                                    backgroundColor: selectedGenre === genre.id ? '#0070f3' : 'transparent',
                                    color: selectedGenre === genre.id ? 'white' : '#20bcc6',
                                    padding: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    width: '100%',
                                    fontSize: '20px',
                                    borderRadius: '30px',
                                    fontWeight: 'bold',

                                }}
                            >
                                {genre.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Права панель з фільмами */}
            <div style={{width: '75%', padding: '20px'}}>
                <h1 style={{marginBottom: '20px', color: '#20bcc6'}}>Movies </h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '20px'
                }}>
                    {movies.map(movie => (
                        <Link key={movie.id} href={`/moives/${movie.id}`}>
                            <div style={{cursor: 'pointer'}}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={200}
                                    height={300}
                                />
                                <h3 style={{color: '#20bcc6'}}>{movie.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GenresPage;
