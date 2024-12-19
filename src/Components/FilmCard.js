// src/FilmCard.js
import React from "react";
import './Rating/Rating';
import Rating from "./Rating/Rating";
import { Link } from 'react-router-dom';

const FilmCard = ({ movie }) => {
  return (
    <div className="film-card">
      <img src={movie.posterUrl} alt={movie.title} width="150" />
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`} className="btn btn-info">See Details</Link>
      <Rating movieRating={movie.rate} isMovieRating={true} />
    </div>
  );
};

export default FilmCard;
