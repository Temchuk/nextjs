const API_KEY = '8d1f8bdd5fb0a66ec4f26fbf2db03480'; // Вставте тут свій API-ключ

// Отримуємо всі фільми
export const getAllMovies = async (): Promise<any[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Повертаємо масив з фільмами
};

// Отримуємо інформацію про конкретний фільм за його ID
export const getMovieById = async (id: string): Promise<any> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data; // Повертаємо інформацію про фільм
};

// Отримуємо список усіх жанрів
export const getGenres = async (): Promise<any[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    return data.genres; // Повертаємо масив жанрів
};

// Отримуємо фільми за конкретним жанром
export const getMoviesByGenre = async (genreId: string): Promise<any[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await response.json();
    return data.results; // Повертаємо масив фільмів для конкретного жанру
};
