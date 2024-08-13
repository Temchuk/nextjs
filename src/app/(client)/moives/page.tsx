"use client";

import React from 'react';
import { getAllMovies } from "@/services/api.service";
import Link from "next/link";
import Image from "next/image";

const MoviesPage = async () => {
    const allMovies = await getAllMovies();

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {allMovies.map(movie => (
                <Link key={movie.id} href={`/moives/${movie.id}`}>
                <div>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            width={200}
                            height={300}
                        />
                        <h3>{movie.title}</h3>
                    </div>
                </Link>

            ))}
        </div>
    );
};

export default MoviesPage;
