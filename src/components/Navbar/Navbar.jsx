import React from 'react'
import {Link} from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

function Navbar({ currentUser }){
    return (
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">
            <Link to ='/' style= {{textDecoration: 'none', color: 'black'}}>
                PROJECT NAME
            </Link>
            </span>
            {
                currentUser ?
                <span onClick = {() => auth.signOut()} style= {{textDecoration: 'none', color: 'black', cursor: 'pointer'}}>
                    Log Out
                </span>                :
                <Link to ='/signIn' style= {{textDecoration: 'none', color: 'black'}}>
                    Login
                </Link>
            }
        </nav>
    );
}

export default Navbar;