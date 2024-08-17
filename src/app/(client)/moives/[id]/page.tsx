"use client"; // Компонент клієнтський

import React from 'react';
import { getMovieById } from "@/services/api.service";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import stylesMoviePID from './MoviePageID.module.css';
import styles from "@/app/page.module.css"; // Імпортуємо стилі


const MoviePage = async ({ params }: { params: { id: string } }) => {
    const movie = await getMovieById(params.id);

    return (
        <div>

            <div className={styles.treeNavigation}>
                <Link style={{marginRight: '20px'}} href="/moives" passHref>
                    <img
                        src="https://img.icons8.com/flat-round/64/back--v1.png"
                        alt="Back Arrow Icon"
                        style={{width: '24px', height: '24px'}}
                    />
                </Link>
                <Link className={stylesMoviePID.linkNavigation} href='/'>HOME</Link>
                <Link className={stylesMoviePID.linkNavigation} href='/moives'>MOVIES</Link>
                <p className={stylesMoviePID.titleColorNav}>{movie.title}</p>
            </div>



            <div className={stylesMoviePID.characteristics}>

                <div>
                    <h1 className={stylesMoviePID.titleOriginal}>{movie.title}</h1>



                    <h2 className={stylesMoviePID.release}>Release date:
                        <span className={stylesMoviePID.releaseDateValue}>{movie.release_date}</span>
                    </h2>


                    <h2 className={stylesMoviePID.release}>Original language:
                        <span className={stylesMoviePID.releaseDateValue}>{movie.original_language}</span>
                    </h2>




                    <div className={stylesMoviePID.genresContainer}>
                        {movie.genres.map((genre: { id: number, name: string }) => (
                            <Link
                                key={genre.id}
                                href={`/genres?selectedGenre=${genre.id}`} // Передаємо selectedGenre як параметр у URL
                                className={stylesMoviePID.genreLink}
                            >
                                {genre.name}
                            </Link>
                        ))}
                    </div>


                    <h2 style={{marginBottom: '10px', marginTop: '20px'}}>IMDb rating:
                        <span className={stylesMoviePID.releaseDateValue}>{movie.vote_average}/{movie.vote_count}</span>
                    </h2>
                    <StarRating rating={movie.vote_average}/>
                    <h2 style={{marginTop: '10px', marginBottom: '20px'}}>Overview: {movie.title}</h2>
                    <p >{movie.overview}</p>
                </div>
                <div id={stylesMoviePID.ImageIDContainer}>
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
