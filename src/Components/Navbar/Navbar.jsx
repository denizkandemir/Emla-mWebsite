import logo from "/EmlakçımLogo.png";
import "./Navbar.scss";
import { useState,useEffect } from "react";

const Navbar = () => {

    const [scroll,setScroll ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={scroll ? "navbar-scrolled navbar-container" : "navbar-container"} >
            <div className="logo-p-container">
                <a href="main.html" className="logo" rel="home">
                    <img src={logo}  className={scroll ? "logo-scrolled navbar-logo" : "navbar-logo"} alt="" />
                </a>
                <p className={scroll ? "logo-p-scrolled logo-p" : "logo-p"}>
                    Emlakçım
                </p>
            </div>
            <ul className="navbar-center-content">
                <li><a href="index.html" className={scroll ?  "navbar-p-scrolled navbar-p" : "navbar-p"}> Entegrasyonlarımız </a></li>
                <li><a href="about.html" className={scroll ?  "navbar-p-scrolled navbar-p" : "navbar-p"}> Paketlerimiz </a></li>
                <li><a href="about.html" className={scroll ?  "navbar-p-scrolled navbar-p" : "navbar-p"}> Hakkımızda </a></li>
                <li><a href="about.html" className={scroll ?  "navbar-p-scrolled navbar-p" : "navbar-p"}> İletişim </a></li>
            </ul>
            <div className="sidebar-svg-container" id="sidebar-opener">
                <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Menu</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Menu">
                            <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                            <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="white" stroke-width="2" stroke-linecap="round">
                            </line>
                            <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="white" stroke-width="2" stroke-linecap="round">
                            </line>
                            <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="white" stroke-width="2" stroke-linecap="round">
                            </line>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Navbar;