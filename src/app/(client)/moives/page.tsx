"use client";

import React, { useEffect, useState } from 'react';
import { getAllMovies } from "@/services/api.service";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import styles from './Pagination.module.css';

const MoviesPage = ({ searchParams }: { searchParams: { page?: string } }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.page || '1', 10));
    const [allMovies, setAllMovies] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getAllMovies(currentPage);
            setAllMovies(data.results);
            setTotalPages(data.total_pages);
        };

        fetchMovies();
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    let decoration;
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', margin: '50px' }}>
                {allMovies.map(movie => (
                    <Link key={movie.id} href={`/moives/${movie.id}`}>
                        <div>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                width={200}
                                height={300}
                            />
                            <h3 style={{color: '#20bcc6', textDecoration: 'none'}}>{movie.title}</h3>

                            <StarRating rating={movie.vote_average}/>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Пагінація */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '10px', marginBottom: '50px' }}>
                {/* Кнопка попередньої сторінки */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className={styles.paginationButton}
                >
                    &lt; Previous
                </button>

                {/* Номери сторінок */}
                {currentPage > 1 && (
                    <Link href={`?page=${currentPage - 1}`} passHref>
                        <span className={styles.paginationNumber}>{currentPage - 1}</span>
                    </Link>
                )}
                <span className={`${styles.paginationNumber} ${styles.current}`}>{currentPage}</span>
                {currentPage < totalPages && (
                    <Link href={`?page=${currentPage + 1}`} passHref>
                        <span className={styles.paginationNumber}>{currentPage + 1}</span>
                    </Link>
                )}

                {/* Кнопка наступної сторінки */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className={styles.paginationButton}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default MoviesPage;
