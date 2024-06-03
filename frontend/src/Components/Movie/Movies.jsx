import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/get/movies');
        setMovies(response.data.findMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (

    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {movies.map((movie, index) => (
          <div key={movie._id} className="col">
            <Link to="/ticket" className="card shadow-sm " style={{cursor:'pointer',textDecoration:"none"}}>
              <img src={movie.poster} className="bd-placeholder-img card-img-top" width="100%" height="225" alt={movie.title} style={{fontWeight:'bolder'}}/>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
