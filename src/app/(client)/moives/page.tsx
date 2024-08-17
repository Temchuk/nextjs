"use client";

import React, { useEffect, useState } from 'react';
import { getAllMovies } from "@/services/api.service";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import paginationStyles from './Pagination.module.css';
import moviesStyles from './Movies.module.css';
import styles from "@/app/page.module.css";




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

            <div className={styles.treeNavigation}>
                <Link style={{marginRight: '20px'}} href="/" passHref>
                    <img
                        src="https://img.icons8.com/flat-round/64/back--v1.png"
                        alt="Back Arrow Icon"
                        style={{width: '24px', height: '24px'}}
                    />
                </Link>
                <Link className={styles.linkNavigation} style={{color: 'inherit',}} href='/'>HOME</Link>
                <Link className={styles.linkNavigation} style={{color: '#20bcc6',}}  href='/moives'>MOVIES</Link>

            </div>



            <div className={moviesStyles.moviesDivMaster} >
                {allMovies.map(movie => (
                    <Link  style={{ textDecoration: 'none'}} key={movie.id} href={`/moives/${movie.id}`}>
                        <div className={moviesStyles.moviesTitle}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                width={200}
                                height={300}
                                className={moviesStyles.moviesImg}
                            />
                            <h3

                                style={{color: '#20bcc6', textDecoration: 'none'}}>{movie.title}</h3>

                            <StarRating rating={movie.vote_average}/>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Пагінація */}
            <div className={moviesStyles.numberPagination}>
                {/* Кнопка попередньої сторінки */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className={paginationStyles.paginationButton}
                >
                    &lt; Previous
                </button>

                {/* Номери сторінок */}
                {currentPage > 1 && (
                    <Link style={{textDecoration: 'none'}} href={`?page=${currentPage - 1}`} passHref>
                        <span className={paginationStyles.paginationNumber}>{currentPage - 1}</span>
                    </Link>
                )}
                <span className={`${paginationStyles.paginationNumber} ${paginationStyles.current}`}>{currentPage}</span>
                {currentPage < totalPages && (
                    <Link style={{ textDecoration: 'none'}} href={`?page=${currentPage + 1}`} passHref>
                        <span className={paginationStyles.paginationNumber}>{currentPage + 1}</span>
                    </Link>
                )}

                {/* Кнопка наступної сторінки */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className={paginationStyles.paginationButton}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default MoviesPage;
