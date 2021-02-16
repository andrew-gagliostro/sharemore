import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo">ShareMore</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop ShareMore</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
