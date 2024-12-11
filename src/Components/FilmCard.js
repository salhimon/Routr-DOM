// src/Film.js
import React from "react";
import './Rating/Rating'
import Rating from "./Rating/Rating";

const FilmCard = ({ movie }) => {
    return (
        <div className="film-card">
            <img src={movie.posterUrl} alt={movie.title} width="150" />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <a href={movie.trailer} target="_blank" rel="noreferrer">Watch Trailer</a>
            <Rating movieRating={movie.rate} isMovieRating={true}/>

        </div>
    );
};

export default FilmCard;
