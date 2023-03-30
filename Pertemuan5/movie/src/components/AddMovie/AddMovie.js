import styles from "./AddMovie.module.css";

function AddMovie() {
    return (
        <div className={styles.container}>
            <section className={styles.addmovie}>
                <div className={styles.addmovie__left}>
                    <img
                    className={styles.addmovie__image}
                    src="https://picsum.photos/536/354" 
                    alt="placeholder"
                    />
                </div>
                <div className={styles.addmovie__right}>
                    <h2 className={styles.addmovie__title}>Add Movie</h2>
                    <form action="title">
                        <div className={styles.addmovie__group}>
                            <label htmlfor="" className={styles.addmovie__label}>
                                Title
                            </label>
                            <input
                            className={styles.addmovie__input}
                            type="text"
                            name="title"
                            />
                        </div>
                        <div className={styles.addmovie__group}>
                            <label htmlfor="" className={styles.addmovie__label}>
                                Year
                            </label>
                            <input
                            className={styles.addmovie__input}
                            type="text"
                            name="title"
                            />
                        </div>
                        <div>
                            <button className={styles.addmovie__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovie;