import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchMovies({ searchKey }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (searchKey) {
            const fetchMovies = async () => {
                try {
                    const response = await axios.get(`https://securityboat-assignment-lw1p.onrender.com/api/movie/search?title=${searchKey}`);
                    setMovies(response.data);
                } catch (error) {
                    console.error('Error fetching movies:', error);
                    if (error.response) {
                        setError(error.response.data.error || 'Something went wrong while fetching movies.');
                    } else {
                        setError('Something went wrong while fetching movies.');
                    }
                }
            };
            fetchMovies();
        }
    }, [searchKey]);

    return (
        <div className="container mt-4">
            {error && <div className="text-danger mt-2">{error}</div>}
            {movies.length > 0 && (
                <div className="row">
                    {movies.map(movie => (
                        <div key={movie._id} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={movie.poster} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchMovies;
