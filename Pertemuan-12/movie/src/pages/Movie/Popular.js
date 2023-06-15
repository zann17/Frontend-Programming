import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constants/endpoint";

function Popular() {
     // Membuat state movie
    const [movies, setMovies] = useState([]);

    // Melakukan useEffect
    useEffect(() => {
       // Memanggil fungsi getpopularMovies
       getPopularMovies();
    });

    // Buat Fungsi getpopularMovies
    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }

    return (
        <>
            <Hero />
            <Movies movies={movies} title='Popular Movie' />
        </>
    );
}

export default Popular;