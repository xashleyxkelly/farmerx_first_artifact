import React from 'react';
import {Link} from 'react-router-dom';
import '../resources/nav.css';


export default function Nav() {
    return (
        <nav>
            <h3 className='title'>FarmerEx</h3>
            <u1 classname='nav-links'>
                    <Link to='/login'>
                    <li className='nav-link'>Login</li>
                    </Link>
                    <Link to='/register'>
                        <li className='nav-link'>Register</li>
                    </Link>
            </u1>
        </nav>
    )
}