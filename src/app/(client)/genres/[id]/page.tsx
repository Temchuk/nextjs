import React from 'react';
import { getMoviesByGenre } from '@/services/api.service';
import Image from 'next/image';
import Link from 'next/link';

const MoviesByGenrePage = async ({ params }: { params: { id: string } }) => {
    const movies = await getMoviesByGenre(params.id); // Отримуємо фільми для конкретного жанру

    return (
        <div>
            <h1>Movies in this Genre</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {movies.map(movie => (
                    <Link key={movie.id} href={`/movies/${movie.id}`}>
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
        </div>
    );
};

export default MoviesByGenrePage;
