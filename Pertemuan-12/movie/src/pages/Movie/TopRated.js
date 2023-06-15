import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constants/endpoint";

function NowPlaying() {
    // Membuat state movie
    const [movies, setMovies] = useState([]);

    // Melakukan useEffect
    useEffect(() => {
       // Memanggil fungsi getpopularMovies
       TopRatedMovies();
    });

    // Buat Fungsi getpopularMovies
    async function TopRatedMovies() {
        const response = await axios(ENDPOINTS.TOPRATED);
        setMovies(response.data.results);
    }

    return (
        <>
            <Hero />
            <Movies movies={movies} title='Top Rated Movies' />
        </>
    );
}

export default NowPlaying;