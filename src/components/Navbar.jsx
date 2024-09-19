import React from "react";
import { Link } from "react-router-dom";
// import './Navbar.css';

export default function Navbar (props){
    return(
        <header>
            <div className="navbar">
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <div className="logo">
                    <Link to='/'>
                        <img src="https://png.pngtree.com/element_our/png/20181113/clapperboard-film-logo-icon-design-template-vector-isolated-png_236642.jpg" alt="Logo" />
                    </Link>
                </div>  
            </div> 
        </header> 
    )
}