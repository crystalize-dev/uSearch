import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            {isAuth
                ?
                <div className="navbar_links">
                    <div className="linkBlock unblocked" onClick={logout}>
                        <a className="link">Quit</a>
                    </div>
                    <div className='linkBlock unblocked'>
                        <Link to="/about" className="link">About</Link>
                    </div>
                    <div className='linkBlock unblocked'>
                        <Link to="/posts" className="link">Posts</Link>
                    </div>
                </div>
                :
                <div className="navbar_links">
                    <div className='link blocked'>
                        <Link to="/about">About</Link>
                    </div>
                    <div className='link blocked'>
                        <Link to="/">Posts</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;