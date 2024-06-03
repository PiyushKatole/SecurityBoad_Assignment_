import axios from 'axios';
import React, { useState } from 'react';

function GetTickets() {
    const [email, setEmail] = useState('');
    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.get(`http://localhost:8001/api/booked/tickets?email=${email}`);
            console.log('Response data:', response.data);
            setTickets(response.data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
            if (error.response) {
                setError(error.response.data.error || 'Something went wrong while fetching tickets.');
            } else {
                setError('Something went wrong while fetching tickets.');
            }
        }
    };

    return (
        <div className='container mt-4' style={{ width: '35vw' }}>
            <div className="modal-content rounded-4 shadow">
                <div className="modal-header p-5 pb-4">
                    <h1 className="fw-bold mb-0 fs-2">View Booked Tickets</h1>
                </div>

                <div className="modal-body p-5 pt-0">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control rounded-3"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingInput">Enter Email Address</label>
                        </div>

                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Get Tickets</button>
                        {error && <small className="text-danger">{error}</small>}
                    </form>

                    {tickets.length > 0 && (
                        <div className="mt-4">
                            <h2 className="fs-4 fw-bold mb-3">Booked Tickets</h2>
                            <div className="list-group">
                                {tickets.map(ticket => (
                                    <div key={ticket._id} className="list-group-item list-group-item-action">
                                        <h5 className="mb-1">Movie: {ticket.movie}</h5>
                                        <p className="mb-1">Email: {ticket.email}</p>
                                        <p className="mb-1">Mobile: {ticket.number}</p>
                                        <p className="mb-1">Seats: {ticket.seat.join(', ')}</p>
                                        <small className="text-muted">Booking Time: {new Date(ticket.bookingTime).toLocaleString()}</small>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GetTickets;
