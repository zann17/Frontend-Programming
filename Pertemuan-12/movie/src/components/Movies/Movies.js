import styles from "./Movies.module.css"
import Movie from "../Movie/Movie"
import { nanoid } from "nanoid";
function Movies(props) {
 
// Destructing props: state movies
const {title} = props;
const { movies, setMovies} = props;
    // Fungsi untuk handle event click
    // Dijalankan ketika button di click
    
    function handleClick() {
        const newFilm = {
            id: nanoid(9) , title: "Jigsaw",
            year: 2021, type: "movie",
            poster: "https://picsum.photos/300/450",
        };

        setMovies([...movies, newFilm])
    }
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2  className={styles.movies__title}>{title || "Latest Movie"}</h2>
                <div className={styles.movie__container}>
                  {movies.map(function (movie) {
                    return <Movie key={movie.id} movie={movie} />;
                  })}
                </div>
                {/* Element button diberikan event click: onclick */}
                <button onClick={handleClick}>Add Movie</button>
            </section>
        </div>
    )
}

export default Movies;
