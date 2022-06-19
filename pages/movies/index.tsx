import { queryRequest } from "../../services/moviesRequest";
import Loader from "../../components/Loader/Loader";
import FilmList from "../../components/FilmList/FilmList";
import { useState } from "react";
import styles from "../../styles/MoviesPage.module.scss";

const MoviesPage = () => {
  const [filmsData, setFilmsData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    queryRequest(input)
      .then(({ data }) =>
        data.results.length === 0 ? setError("No films found") : setFilmsData(data.results)
      )
      .catch(() => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  };
  return (
    <section className={styles.movies}>
      <form onSubmit={handleOnSubmit} className={styles.movies__form}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className={styles.movies__input}
        />
        <button type="submit" className={styles.movies__btn}>
          search
        </button>
      </form>
      {isLoading && <Loader />}
      {error && <h3>{error}</h3>}
      <FilmList listData={filmsData} />
    </section>
  );
};

export default MoviesPage;

MoviesPage.title="Search for movies";
