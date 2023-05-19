import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid container">
                    <NavLink className="navbar-brand" to="/"><span className="watch">Watch</span><span className="mart">Mart</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link orders" aria-current="page" to="orders">Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link about" aria-current="page" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link contact" aria-current="page" to="contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className=" d-flex" role="search">
                            <input className="form-control me-2 ms-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-light" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;