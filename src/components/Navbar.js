import React from "react";
import { NavLink } from "react-router-dom";
import navbarCss from "../styles/navbar.module.css"

function Navabar(){
    return(
        <nav>
            <div className={navbarCss.container}>
                <div className={`${navbarCss['nav-left']}`}>
                    <svg  className={navbarCss.log} width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.246 10.5L11.828 0H3.6L0.162 9C0.0559999 9.32 0 9.652 0 10C0 12.208 2.3 14 5.142 14C7.762 14 9.928 12.472 10.246 10.5ZM18 14C20.84 14 23.142 12.208 23.142 10C23.142 9.918 23.136 9.836 23.132 9.758L22.114 0H13.886L12.866 9.75C12.862 9.832 12.858 9.914 12.858 10C12.858 12.208 15.16 14 18 14ZM28 16.092V24H8V16.104C7.124 16.42
                         6.16 16.6 5.142 16.6C4.752 16.6 4.374 16.554 4 16.502V29.2C4 30.74 5.258 32 6.796 32H29.2C30.74 32 32 30.738 32 29.2V16.504C31.6219 16.562 31.2404 16.5948 30.858 16.602C29.8828 16.601 28.9154 16.4284 28 16.092ZM35.84 9L32.398 0H24.172L25.752 10.484C26.06 12.464 28.226 14 30.858 14C33.698 14 36 12.208 36 10C36 9.652 35.944 9.32 35.84 9Z" fill="#79BCCF"/>
                    </svg>
                    <p className={navbarCss.logoName}>Store</p>
                </div>
                <div className={`${navbarCss['nav-right']}`}>
                    <ul className={navbarCss.links}>
                        <li><NavLink to="/" className={navbarCss.home}>Home</NavLink></li>
                        <li><NavLink to="/shop" className={navbarCss.shop}>Shop</NavLink></li>
                        <li><NavLink to="/about" className={navbarCss.about}>About</NavLink></li>
                        <svg className={navbarCss.cart} width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6364 32.5454C14.4397 32.5454 15.0909 31.8942 15.0909 31.0909C15.0909 30.2876 14.4397 29.6364 13.6364 29.6364C12.833 29.6364 12.1818 30.2876 12.1818 31.0909C12.1818 31.8942 12.833 32.5454 13.6364 32.5454Z" stroke="#787878" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M29.6364 32.5454C30.4397 32.5454 31.0909 31.8942 31.0909 31.0909C31.0909 30.2876 30.4397 29.6364 29.6364 29.6364C28.833 29.6364 28.1818 30.2876 28.1818 31.0909C28.1818 31.8942 28.833 32.5454 29.6364 32.5454Z" stroke="#787878" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 2H7.81818L11.7164 21.4764C11.8494 22.146 12.2137 22.7476 12.7455 23.1757C13.2774 23.6038 13.9428 23.8313 14.6255 23.8182H28.7636C29.4463 23.8313 30.1117 23.6038 30.6436 23.1757C31.1754 22.7476 31.5397 22.146 31.6727 21.4764L34 9.27273H9.27273" stroke="#787878" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        {/* <li><NavLink to ="/contact">Contact</NavLink></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navabar