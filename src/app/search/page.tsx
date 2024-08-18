"use client";

import React, {useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [movies, setMovies] = useState<any[]>([]);


    return (
        <div>
            <h1>Search Results for: {query}</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px'
            }}>
                {movies.map(movie => (
                    <Link key={movie.id} href={`/moives/${movie.id}`}>
                        <div style={{ cursor: 'pointer' }}>
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
        </div>
    );
};

export default SearchPage;
