// src/FilmList.js
import React  from "react";
import FilmCard from "./FilmCard";

const FilmList = ({movies,inputSearch,rating}) => {
   

    return (
        <div>
                    <h1 style={{ textAlign: "center" }}>Movie Carousel with Search</h1>

        <div className="film-list" style={{ backgroundColor: "#199", color: "#222", padding: "20px", minHeight: "100vh" }}>

           {movies
           .filter(movie =>
           movie.title.toUpperCase().includes(inputSearch.toUpperCase())
           &&
           movie.rate >= rating
           )
           .map((movie)=><FilmCard movie={movie} key={movie.id}/>)}

           
        </div></div>
    );
};

export default FilmList;
