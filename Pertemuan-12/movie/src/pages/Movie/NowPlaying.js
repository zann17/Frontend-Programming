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
       getNowPlayingMovies();
    });

    // Buat Fungsi getpopularMovies
    async function getNowPlayingMovies() {
        const response = await axios(ENDPOINTS.NOWPLAYING);
        setMovies(response.data.results);
    }

    return (
        <>
            <Hero />
            <Movies movies={movies} title='Now Playing Movie' />
        </>
    );
}

export default NowPlaying;