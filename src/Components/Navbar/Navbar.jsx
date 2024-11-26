import logo from "/EmlakçımLogo.png";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div class="navbar-container" id="navbar-container">
            <div class="logo-p-container">
                <a href="main.html" class="logo" rel="home">
                    <img src={logo} id="logo" class="navbar-logo" alt=""/>
                </a>
                <p class="logo-p" id="logo-p">
                    Emlakçım
                </p>
            </div>
            <ul class="navbar-center-content">
                <li><a href="index.html" class="navbar-p" id="navbar-p"> Hazır Websiteler </a></li>
                <li><a href="pricing.html" id="navbar-p" class="navbar-p"> Özellikler </a></li>
                <li><a href="about.html" id="navbar-p" class="navbar-p"> Paketlerimiz </a></li>
                <li><a href="about.html" id="navbar-p" class="navbar-p"> Hakkımızda </a></li>
                <li><a href="about.html" id="navbar-p" class="navbar-p"> İletişim </a></li>
            </ul>
            <div class="sidebar-svg-container" id="sidebar-opener">
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