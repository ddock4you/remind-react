import React from "react";

import classes from "./Movie.module.css";
import { ConvertMovieItem } from "../types/movie";

const Movie = (props: ConvertMovieItem) => {
    return (
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
        </li>
    );
};

export default Movie;
