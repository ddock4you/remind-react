import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import { ConvertMovieItem } from "../types/movie";

const MovieList = (props: { movies: ConvertMovieItem[] }) => {
    return (
        <ul className={classes["movies-list"]}>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.release}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    );
};

export default MovieList;
