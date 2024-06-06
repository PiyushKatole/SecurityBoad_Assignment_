import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">

                    <li className="nav-item"> <Link to='/' className="nav-link px-2 text-muted " style={{fontSize:'20px' , fontWeight:'500'}}>Home</Link></li>

                    <li className="nav-item"> <Link to='/ticket' className="nav-link px-2 text-muted" style={{fontSize:'20px' , fontWeight:'500'}}>Ticket</Link></li>

                    <li className="nav-item"> <Link to='/food' className="nav-link px-2 text-muted" style={{fontSize:'20px' , fontWeight:'500'}}>Food Order</Link></li>
                </ul>
                <p>© 2021 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
