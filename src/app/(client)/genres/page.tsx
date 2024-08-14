import React from 'react';
import { getGenres } from '@/services/api.service';
import Link from 'next/link';

const GenresPage = async () => {
    const genres = await getGenres(); // Отримуємо всі жанри

    return (
        <div>
            <h1>Movie Genres</h1>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id}>
                        <Link href={`/genres/${genre.id}`}>
                            {genre.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenresPage;
