import React from 'react'
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">
            <Link to ='/' style= {{textDecoration: 'none', color: 'black'}}>
                PROJECT NAME
            </Link>
            </span>
                
            <Link to ='/login' style= {{textDecoration: 'none', color: 'black'}}>
                Login
            </Link>
        </nav>
    );
}

export default Navbar;