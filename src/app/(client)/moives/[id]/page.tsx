"use client"; // Компонент клієнтський

import React from 'react';
import { getMovieById } from "@/services/api.service";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/HeaderComponent.module.css";
import StarRating from "@/components/StarRating";

const MoviePage = async ({ params }: { params: { id: string } }) => {
    const movie = await getMovieById(params.id);

    let bottom;
    return (
        <div>
            <div id="container1">
                <Link id="button1" href="/movies" passHref>
                    <img
                        src="https://img.icons8.com/ios-filled/50/000000/back.png"
                        alt="Back Arrow Icon"
                        style={{ width: '24px', height: '24px' }}
                    />
                </Link>
                <Link className={styles.link} href='/'>HOME</Link>
                <Link className={styles.link} href='/movies'>MOVIES</Link>
                <p id="p1">{movie.title}</p>
            </div>

            <h1 id="h11">{movie.title}</h1>
            <div id="container">
                <div>
                    <h2 id="myh2">Release date: {movie.release_date}</h2>
                    <h2 id="myh2">Original language: {movie.original_language}</h2>
                    <div  style={{ display: 'flex', alignItems: 'center' }}>
                    </div>
                    <h2 id="myh2">Genre</h2>
                    <h2 style={{ marginBottom: '10px' }}>IMDb rating: {movie.vote_average}/{movie.vote_count}</h2>
                    <StarRating rating={movie.vote_average} />
                    <h2 style={{ marginTop: '10px', marginBottom: '20px' }}>Overview {movie.title}</h2>
                    <p id="myh2">{movie.overview}</p>
                </div>
                <div id="ImageIDcontainer">
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
