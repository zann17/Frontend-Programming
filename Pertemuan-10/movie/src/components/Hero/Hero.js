import { useState, useEffect } from "react";
import StyledHero from "./Hero.styled";
import Button from "../ui/Button";

function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(function (){
    // lakukan fetch di sini

    async function fetchMovie() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, []);
  return (
    <StyledHero >
        <div>
            <section>
                <div className="hero_left">
                    <h2>{movie.Title}</h2>
                    <h3>{movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button md variant="secondary">Watch Movie</Button>
                </div>
                <div className="hero_right">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </section>
        </div>
        </StyledHero>
  );
}

export default Hero;