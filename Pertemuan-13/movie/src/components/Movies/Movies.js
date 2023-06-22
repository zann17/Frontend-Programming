import styles from "./Movies.module.css"
import Movie from "../Movie/Movie"
import { useSelector } from "react-redux";


function Movies(props) {
 
const {title} = props;

const movies = useSelector((store) => store.movies.movies);

       
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2  className={styles.movies__title}>{title || "Latest Movie"}</h2>
                <div className={styles.movie__container}>
                  {movies.map(function (movie) {
                    return <Movie key={movie.id} movie={movie} />;
                  })}
                </div>
            </section>
        </div>
    )
}

export default Movies;
