import houseImg from "/header-house.png";
import "./Header.scss";

const Header = () => {
    return (
        <>
            <div className="header-container  center-tablet dark overlay-hero">
                <div className="header-content-container">
                    <div className="header-info-container">
                        <h1 className="header-title"> Emlak Zone İle Yeni Bir Hayatın Kapılarını Aralayın! </h1>
                        <p className="header-p"> Uzman kadromuz ve geniş ev kataloğumuz ile modern yaşam alanlarını ve fark yaratan
                            tasarımları keşfedin. </p>
                        <button className="header-button">
                            <a href="" className="header-link"> Keşfet </a>
                        </button>
                    </div>
                    <div className="header-img-container">
                        <img src={houseImg} className="header-img" alt="Hero Illustration" />
                    </div>,
                </div>
            </div>
        </>
    )
}

export default Header;