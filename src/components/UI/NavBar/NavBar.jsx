import React from 'react';
import cl from "./NavBar.module.css";

const NavBar = ({children}) => {
    return (
        <div className={cl.navbar}>
            {children}
        </div>
    );
};

export default NavBar;