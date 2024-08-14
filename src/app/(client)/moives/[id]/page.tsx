"use client"; // Компонент клієнтський

import React from 'react';
import { getMovieById } from "@/services/api.service";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import styles from './MoviePageID.module.css'; // Імпортуємо стилі


const MoviePage = async ({ params }: { params: { id: string } }) => {
    const movie = await getMovieById(params.id);

    return (
        <div>

            <div id={styles.container1}>
                <Link id={styles.button1} href="/moives" passHref>
                    <img
                        src="https://img.icons8.com/flat-round/64/back--v1.png"
                        alt="Back Arrow Icon"
                        style={{width: '24px', height: '24px'}}
                    />
                </Link>
                <Link className={styles.link} href='/'>HOME</Link>
                <Link className={styles.link} href='/moives'>MOVIES</Link>
                <p id={styles.p1}>{movie.title}</p>
            </div>



            <div id={styles.container}>

                <div>
                    <h1 id={styles.h11}>{movie.title}</h1>
                    {/*<h2 id={styles.myh2}>Release date: {movie.release_date}</h2>*/}


                    <h2 id={styles.myh2}>Release date:
                        <span className={styles.releaseDateValue}>{movie.release_date}</span>
                    </h2>


                    <h2 id={styles.myh2}>Original language:
                        <span className={styles.releaseDateValue}>{movie.original_language}</span>
                    </h2>




                    <div id={styles.genresContainer}>
                        {movie.genres.map((genre: { id: number, name: string }) => (
                            <Link
                                key={genre.id}
                                href={`/genres?selectedGenre=${genre.id}`} // Передаємо selectedGenre як параметр у URL
                                className={styles.genreLink}
                            >
                                {genre.name}
                            </Link>
                        ))}
                    </div>


                    <h2 style={{marginBottom: '10px', marginTop: '20px'}}>IMDb rating:
                        <span className={styles.releaseDateValue}>{movie.vote_average}/{movie.vote_count}</span>
                    </h2>
                    <StarRating rating={movie.vote_average}/>
                    <h2 style={{marginTop: '10px', marginBottom: '20px'}}>Overview: {movie.title}</h2>
                    <p id={styles.myh2}>{movie.overview}</p>
                </div>
                <div id={styles.ImageIDContainer}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={450}
                        height={675}
                    />
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
