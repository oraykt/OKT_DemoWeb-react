import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="#" className="brand-logo">OKT</a>
                <ul className="right">
                    <li>
                        <NavLink to="/">Anasayfa</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Hakkimizda</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Iletisim</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);