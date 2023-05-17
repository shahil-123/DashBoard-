import React from 'react'
import { useState } from 'react';
import { FaSearch } from '../node_modules/react-icons/fa'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-around">
            <div className="container-fluid ">
                <div className='col-md-2'>
                    <a className="navbar-brand" href="/">PRO OTT</a>
                </div>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav justify-content-around col-md-6 ">

                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Show</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Movie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Comedy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">News</a>
                        </li>

                    </ul>
                    <div className='col-md-3 col-sm-12 my-3'>
                        <input className='search-in-dropdown' id='earch-in-dropdown' placeholder='Search...' />   <FaSearch className='search-icon-nav' />
                    </div>
                    <div className='d-flex col-md-3 col-sm-12 mx-2 justify-content-center'>
                        <button className='btn btn-danger btn-Subscribe'>Subscribe</button>
                        &nbsp;    &nbsp;
                        <button className='btn btn-info btn-login '>Join Now</button>
                    </div>
                </div>
            </div>
        </nav>

    );
};


export default Header
