const API_KEY = '8d1f8bdd5fb0a66ec4f26fbf2db03480'; // Вставте тут свій API-ключ

export const getAllMovies = async (): Promise<any[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Повертаємо тільки масив з фільмами
};

export const getMovieById = async (id: string): Promise<any> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data; // Повертаємо інформацію про конкретний фільм
};
