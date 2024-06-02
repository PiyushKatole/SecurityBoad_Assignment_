import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu , setMenu] = useState('home')
    return (
        <header class="p-3 text-bg-dark">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                    </a>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li ><a href="#" class="nav-link px-2 text-white">Security Boat</a></li>
                        <li onClick={() => setMenu('home')}> <Link to='/' class="nav-link px-2 text-white">Home</Link> </li>

                        <li onClick={() => setMenu('contact')}> <Link to='/contact' class="nav-link px-2 text-white">Contact</Link> </li>

                        <li onClick={() => setMenu('order')}> <Link to='/order' class="nav-link px-2 text-white">Order</Link> </li>

                        <li onClick={() => setMenu('ticket')}> <Link to='/ticket' class="nav-link px-2 text-white">Ticket</Link> </li>
                    </ul>

                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div class="text-end">
                        <button type="button" class="btn btn-outline-light me-2">Search</button>
                        <Link to='/login' ><button type="button" class="btn btn-warning ">Login</button></Link>
                       <Link to='/signup' > <button type="button" class="btn btn-success m-2">Sign-up</button> </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
