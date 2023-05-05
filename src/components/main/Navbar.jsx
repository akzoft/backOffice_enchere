import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='navbar-left-items'>
                <div className="menu-toggle"><label htmlFor="sidebar-toggle"><i className='ti ti-menu' /></label></div>

                <div className="navbar-menus">
                    <Link to={""} className='navbar-menus-item'>Articles</Link>
                    <Link to={""} className='navbar-menus-item'>Clients</Link>
                    <Link to={""} className='navbar-menus-item'>Paramètre</Link>
                </div>
            </div>

            <div className='navbar-right-items'>

                <div className="navbar-menus">
                    <i className='ti ti-bell' />
                    <i className='ti ti-calendar' />
                </div>

                <div className="navbar-profile-panel">
                    <div className="navbar-profile-img-box">
                        <img src="assets/avatar.png" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
