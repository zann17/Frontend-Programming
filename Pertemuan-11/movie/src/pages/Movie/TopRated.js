import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlaying() {
    // Simpan API KEY dan URL ke Variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);


    // Melakukan useEffect
    useEffect(() => {
       // Memanggil fungsi getpopularMovies
       TopRatedMovies();
    });

    // Buat Fungsi getpopularMovies
    async function TopRatedMovies() {
        const response = await axios(URL);
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