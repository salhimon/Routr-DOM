import './App.css';
import React, { useState } from 'react';
import FilmList from './Components/FilmList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './Data';
import FilterByName from './Components/FilterByName/FilterByName';
import AddMovie from './Components/Addmovie/AddMovie';
import Rating from './Components/Rating/Rating';

function App() {
  const [movies,setMovies] = useState(moviesData);
  const [inputSearch,setinputSearch] = useState("");
  const [rating,setRating] = useState(1);

const Add = (newMovie) => {
  setMovies([...movies, newMovie])
}

  return (
    <div className="App">
  
      <FilterByName inputSearch={inputSearch} setinputSEarch={setinputSearch}/><br></br>
      <Rating isMovieRating= {false} rating={rating} setRating={setRating}/>
      <FilmList movies={movies} inputSearch={inputSearch} rating={rating}/>
      <AddMovie Add={Add}/>
    </div>
  );
}

export default App;
