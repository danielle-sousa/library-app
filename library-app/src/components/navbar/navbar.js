import React from "react";
import './navbar.css';

const Navbar = (props) => {
    return (
            
                <div className="header shadow-sm p-3 mb-5">
                <h1 className="navHeading p-1 ms-5">{props.heading}</h1>
                </div>
            
        
    )
}

export default Navbar;