import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css';
import {AuthContext} from "../../../../context";
import classes from "classnames";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={cl.navbar}>
            <Link to="/" className={cl.logo}/>
            {isAuth
                ?
                <div className={cl.navbar_links}>
                    <a onClick={logout} className={classes(cl.linkBlock, cl.link)}>Quit</a>
                    <Link to="/posts" className={classes(cl.linkBlock, cl.link)}>Search</Link>
                </div>
                :
                <div className={cl.navbar_links}>
                        <Link to="/about" className={classes(cl.linkBlock, cl.link)}>About</Link>
                        <Link to="/login" className={classes(cl.linkBlock, cl.link)}>Login</Link>
                </div>
            }
        </div>
    );
};

export default Navbar;