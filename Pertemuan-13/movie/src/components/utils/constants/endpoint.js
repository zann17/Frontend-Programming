// Membuat variable API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// Membuat variable URL
const BASE_URL = "https://api.themoviedb.org/3";

// Membuat Variable Endpoints
const ENDPOINTS = {
    POPULAR:  `${BASE_URL}/movie/popular?api_key=${API_KEY}` ,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}` ,
    TOPRATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}` ,
    DETAIL(id) {
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },
    RECOMMENDATIONS(id) {
        return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`;
    },
    TRENDING(id) {
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },

};

export default ENDPOINTS;