import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        try { 
            setErrorMessage(null);
            setIsLoading(true);
            const response = await fetch(`https://swapi.dev/api/films/`);
            const data = await response.json();
            const convertData = data.results.map((movie) => ({
                id: movie.episode_id,
                title: movie.title,
                openingText: movie.opening_crawl,
                releaseDate: movie.release_date,
            }));
            setMovies(convertData);
        } catch (error) {
            setErrorMessage(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    let content = <p>Movie is not found</p>;
    if (!isLoading && movies.length > 0) content = <MoviesList movies={movies} />;
    if (errorMessage) content = <p>{`Error! ${errorMessage}`}</p>;
    if (isLoading) content = <p>Loading...</p>;

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
               {content} 
            </section>
        </React.Fragment>
    );
}

export default App;
