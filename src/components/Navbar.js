import React from "react";
import { Link, NavLink } from "react-router-dom";
import navbarCss from "../styles/navbar.module.css"

function Navabar(){
    return(
        <div>
            <div className="nav-left">
                <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.246 10.5L11.828 0H3.6L0.162 9C0.0559999 9.32 0 9.652 0 10C0 12.208 2.3 14 5.142 14C7.762 14 9.928 12.472 10.246 10.5ZM18 14C20.84 14 23.142 12.208 23.142 10C23.142 9.918 23.136 9.836 23.132 9.758L22.114 0H13.886L12.866 9.75C12.862 9.832 12.858 9.914 12.858 10C12.858 12.208 15.16 14 18 14ZM28 16.092V24H8V16.104C7.124 16.42 6.16 16.6 5.142 16.6C4.752 16.6 4.374 16.554 4 16.502V29.2C4 30.74 5.258 32 6.796 32H29.2C30.74 32 32 30.738 32 29.2V16.504C31.6219 16.562 31.2404 16.5948 30.858 16.602C29.8828 16.601 28.9154 16.4284 28 16.092ZM35.84 9L32.398 0H24.172L25.752 10.484C26.06 12.464 28.226 14 30.858 14C33.698 14 36 12.208 36 10C36 9.652 35.944 9.32 35.84 9Z" fill="#79BCCF"/>
                </svg>
                <p>Store</p>
            </div>
            <div className="nav-right">
                <ul>
                    <p>Check font type</p>
                    <li><a href="Home">Home</a></li>
                    <NavLink to="/shop">Shop</NavLink>
                    {/* <li><a href="Home">Shop</a></li> */}
                    <li><a href="Home">About</a></li>
                    <li><a href="Home">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navabar