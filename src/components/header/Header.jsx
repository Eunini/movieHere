import {useState } from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import Logo from './Logo';


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
                    <ul className={Mobile ? 'navMenu-list':"flexSB"} onClick={() => setMobile(false)}>
                        <Link className='navLink' to='/'>Home</Link>
                        <Link className='navLink' to='/series'>Series</Link>
                        <Link className='navLink' to='/movies'>Movies</Link>
                        <Link className='navLink' to='/pages'>Latest</Link>
                        <Link className='navLink' to='/contact'>Contact</Link>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>

                <div className='account flexSB'>
                    <i className='fa fa-search'></i>
                    <i className='fa fa-bell'></i>
                    <i className='fa fa-user'></i>
                    <button>Subscribe</button>
                </div>
            </div>
            </header>
        </>
    );
}

export default Header