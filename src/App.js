import './App.css';
import React, { useState } from 'react';
import FilmList from './Components/FilmList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './Data';
import FilterByName from './Components/FilterByName/FilterByName';
import AddMovie from './Components/Addmovie/AddMovie';
import Rating from './Components/Rating/Rating';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Destination from './Components/Destination/Destination';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setinputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const Add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <FilterByName inputSearch={inputSearch} setinputSearch={setinputSearch} />
                <Rating isMovieRating={false} rating={rating} setRating={setRating} />
                <FilmList movies={movies} inputSearch={inputSearch} rating={rating} />
                <AddMovie Add={Add} />
              </>
            }
          />
          <Route path="/movie/:id" element={<Destination movies={movies} />} />
        </Routes>
      
      </div>
    
  );
}

export default App;
