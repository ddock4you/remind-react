import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import { ConvertMovieItem } from "./types/movie";
import { SystemError } from "./types/error";

function App() {
    const [movies, setMovies] = useState<ConvertMovieItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://practice-http-react-default-rtdb.firebaseio.com/movies.json"
            );
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();

            const convertData = [];
            for (const id in data) {
                convertData.push({
                    id,
                    title: data[id].title,
                    openingText: data[id].openingText,
                    releaseDate: data[id].releaseDate,
                });
            }

            setMovies(convertData);
        } catch (error) {
            const err = error as SystemError;
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    async function addMovieHandler(movie: ConvertMovieItem) {
        const response = await fetch(
            `https://practice-http-react-default-rtdb.firebaseio.com/movies.json`,
            {
                method: "POST",
                body: JSON.stringify(movie),
                headers: requestHeaders,
            }
        );
        const data = await response.json();
        console.log(data);
    }

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
