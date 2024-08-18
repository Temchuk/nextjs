"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "@/services/api.service";
import StarRating from "@/components/StarRating";


export default function Home() {
    const [movies, setMovies] = useState<any[]>([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getAllMovies();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [movies]);

    const handlePrevious = () => {
        setStartIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : movies.length - 3));
    };

    const handleNext = () => {
        setStartIndex(prevIndex => (prevIndex < movies.length - 3 ? prevIndex + 1 : 0));
    };

    const visibleMovies = movies.slice(startIndex, startIndex + 3);

    return (
        <main>


            <div className={styles.treeNavigation}>
                <Link style={{marginRight: '20px'}} href="/" passHref>
                    <img
                        src="https://img.icons8.com/flat-round/64/back--v1.png"
                        alt="Back Arrow Icon"
                        style={{width: '24px', height: '24px'}}
                    />
                </Link>

                <Link className={styles.linkNavigation} style={{color: '#20bcc6'}} href='/'>HOME</Link>
                <Link className={styles.linkNavigation} style={{color: 'inherit'}} href='/moives'>MOVIES</Link>
                <Link className={styles.linkNavigation} style={{color: 'inherit'}} href='/genres'>GENRES</Link>
            </div>
            <h1 style={{marginLeft: '50px'}}>Novelties of world rental 2024-2022</h1>

            {/* Блок з трьома картинками фільмів та стрілками */}
            <div className={styles.movieRow}>
                <button onClick={handlePrevious} className={styles.arrowButton}>
                    <img
                        src="https://img.icons8.com/color/96/back--v1.png"
                        alt="Previous Movie"
                        className={styles.arrow}
                    />
                </button>

                <div className={styles.moviesContainer}>
                    {visibleMovies.map(movie => (

                        <Link key={movie.id} href={`/moives/${movie.id}`} passHref>
                            <div className={styles.movieItem}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={360}
                                    height={540}
                                    className={styles.movieImage}
                                />
                                <StarRating rating={movie.vote_average}/>
                            </div>
                        </Link>
                    ))}
                </div>

                <button onClick={handleNext} className={styles.arrowButton}>
                    <img
                        src="https://img.icons8.com/color/96/forward.png"
                        alt="Next Movie"
                        className={styles.arrow}
                    />
                </button>
            </div>



        </main>
    );
}
