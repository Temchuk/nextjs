"use client"; // Компонент клієнтський, оскільки він відображає динамічні дані

import React from 'react';
import styles from './StarRating.module.css';

type StarRatingProps = {
    rating: number;
    maxRating?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 10 }) => {
    const stars = Math.round((rating / maxRating) * 5); // Конвертує рейтинг у 5-зіркову шкалу

    return (
        <div className={styles.starRating}>
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < stars ? styles.filled : ''}>★</span>
            ))}
        </div>
    );
};

export default StarRating;
