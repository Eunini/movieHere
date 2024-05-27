import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import "./header.css";

const Header = () => {
    const [Mobile, setMobile] = useState(false);

    return (
        <>
            <header>
                <div className='container flexSB'>
                    <nav className='flexSB'>
                        <div className='logo'>
                            <Logo />
                        </div>
                        <ul className={Mobile ? 'navMenu-list' : "flexSB"} onClick={() => setMobile(false)}>
                            <li><Link className='navLink' to='/'>Home</Link></li>
                            <li><Link className='navLink' to='/upcoming'>Upcoming</Link></li>
                            <li><Link className='navLink' to='/latest'>Latest</Link></li>
                            <li><Link className='navLink' to='/trending'>Trending</Link></li>
                            <li><Link className='navLink' to='/contact'>contact</Link></li>
                        </ul>
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>
                    </nav>

                    <div className='account flexSB'>
                        <i className='fa fa-search'></i>
                        <i className='fa fa-bell'></i>
                        <i className='fa fa-user'></i>
                        <button>Sign up</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
