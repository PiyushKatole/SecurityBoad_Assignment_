import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../Banner/Banner';

function SearchMovies({ searchKey}) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        if (searchKey) {
            const fetchMovies = async () => {
                try {
                    const response = await axios.get(`http://localhost:8001/api/movie/search?title=${searchKey}`);
                    setMovies(response.data);
                
                } catch (error) {
                    console.error('Error fetching movies:', error);
                    setError('Something went wrong while fetching movies.');
                }
            };
            fetchMovies();
        }
    }, [searchKey]);

    return (
            <div className="container mt-4">
                {error && <div className="text-danger mt-2">{error}</div>}
                    <div className="row">
                        {movies.map(movie => (
                            <div key={movie._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={movie.poster} className="card-img-top" alt={movie.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                
            </div>
    );
}

export default SearchMovies;
