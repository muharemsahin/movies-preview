import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/">Most Popular</Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link to="/">Most Popular</Link>
                    </li>
                    <li>
                        <Link to="/details">Details Movie</Link>
                    </li>
                    <li>
                        <Link to="/add" className="btn">Add</Link>
                    </li>
                </ul>
            </div>
        </div>

    </header>
  )
}

