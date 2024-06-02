import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
    const [hallmovies, setHallMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/get/movies');
                if (response.status !== 200) {
                    throw new Error('Failed to fetch data');
                }

                // No need to parse JSON, Axios does it automatically
                setHallMovies(response.data);
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                {hallmovies.map((getMovies, index) => (
                    <div className='col' key={index}>
                        <div className='card shadow-sm'>
                            <img src={getMovies.poster} className='bd-placeholder-img card-img-top' alt={getMovies.title} />
                            <div className='card-body'>
                                <h5 className='card-title'>{getMovies.title}</h5>
                                <p className='card-text'>{getMovies.description}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
                                        <button type='button' className='btn btn-sm btn-outline-secondary'>Edit</button>
                                    </div>
                                    <small className='text-body-secondary'>9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
