// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'], // Додаємо image.tmdb.org як дозволений домен
    },
};

export default nextConfig;
