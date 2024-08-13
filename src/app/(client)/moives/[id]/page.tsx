import React from 'react';
import { getMovieById } from "@/services/api.service";
import Image from "next/image";

const MoviePage = async ({ params }: { params: { id: string } }) => {
    const movie = await getMovieById(params.id);

    return (
        <div>
            <h1>{movie.title}</h1>
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
            />
            <p>{movie.overview}</p>
        </div>
    );
};

export default MoviePage;
