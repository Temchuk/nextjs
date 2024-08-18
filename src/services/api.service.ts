
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDFmOGJkZDVmYjBhNjZlYzRmMjZmYmYyZGIwMzQ4MCIsIm5iZiI6MTcyNDAyMTM4OC4zODA5MzYsInN1YiI6IjY2YmE5NGI1NWVjMDA0YWE3Y2RlY2Q3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E2EJ53Q_UJhWW9UoWjabmoaSI-FQOclSFk8jbzgEr7A';

// Загальні параметри запиту
const requestOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json',
    },
};

// всі фільми з підтримкою пагінації
export const getAllMovies = async (page: number = 1): Promise<any> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc`, requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data;
};

// інформаціЯ про конкретний фільм за його ID
export const getMovieById = async (id: string): Promise<any> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, requestOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch movie with ID ${id}`);
    }
    const data = await response.json();
    return data;
};

// список усіх жанрів
export const getGenres = async (): Promise<any[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch genres');
    }
    const data = await response.json();
    return data.genres;
};

// фільми за конкретним жанром
export const getMoviesByGenre = async (genreId: number): Promise<any[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, requestOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch movies for genre ID ${genreId}`);
    }
    const data = await response.json();
    return data.results;
};

// Пошук фільмів за назвою
export const getMoviesByTitle = async (query: string): Promise<any[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch movies by title');
    }
    const data = await response.json();
    return data.results;
};
