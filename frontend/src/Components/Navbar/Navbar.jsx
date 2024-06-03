import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from 'react-router-dom';
import SearchMovies from '../Movie/SearchMovies';

function Navbar() {
    const [menu, setMenu] = useState('home');
    const [searchKey, setSearchKey] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-white"style={{fontSize:'20px'}}>MoviePlex</a></li>
                            <li onClick={() => setMenu('home')}><Link to='/' className="nav-link px-2 text-white" style={{fontSize:'20px' , fontWeight:'600'}}>Home</Link></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'20px'}}>
                                    Ticket
                                </a>
                                <ul className="dropdown-menu">
                                    <li onClick={() => setMenu('ticket')}><Link to='/ticket' className="dropdown-item" style={{fontSize:'15px'}}>Booked Ticket</Link></li>
                                    <li onClick={() => setMenu('viewTicket')}><Link to='/viewticket' className="dropdown-item" style={{fontSize:'15px'}}>Ticket print</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{fontSize:'20px'}}>
                                    Order Food
                                </a>
                                <ul className="dropdown-menu">
                                    <li onClick={() => setMenu('food')}><Link to='/food' className="dropdown-item"style={{fontSize:'15px'}} >Food Shop</Link></li>
                                    <li onClick={() => setMenu('order')}><Link to='/order' className="dropdown-item" style={{fontSize:'15px'}}>Order</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" onSubmit={handleSearch}>
                            <input
                                type="search"
                                className="form-control form-control-dark text-bg-dark"
                                placeholder="Search..."
                                aria-label="Search"
                                value={searchKey}
                                onChange={(e) => setSearchKey(e.target.value)}
                            />
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2" onClick={handleSearch}>Search</button>
                            <Link to='/login'><button type="button" className="btn btn-warning">Login</button></Link>
                            <Link to='/signup'><button type="button" className="btn btn-success m-2">Sign-up</button></Link>
                        </div>
                    </div>
                </div>
            </header>

            <SearchMovies searchKey={searchKey} />
        </>
    );
}

export default Navbar;
