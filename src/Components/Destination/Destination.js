import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Destination.css';

const Destination = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Film not found!</h2>;
  }

  return (
    <div className="destination-page">
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} width="300" />
      <p><strong>Description:</strong> {movie.description}</p>
      </div>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
     
      <br />
      <Link to="/" className="btn btn-primary">Return to Home</Link>
    </div>
  );
};

export default Destination;
