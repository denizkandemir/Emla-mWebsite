import "./Header.scss";
import background1 from "/EmlakçımHeader11.png";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";


const Header = () => {
    return (
        <>
            <div className="header-container">
                <Navbar />
          
                <div className="header-content-container">
                    <div className="header-info-container">
                        <h1 className="header-title"> Emlakçım İle Yeni Bir Hayatın Kapılarını Aralayın! </h1>
                        <p className="header-p">
                            Mükemmel Evinizi Bulmanıza Yardımcı Olalım.
                        </p>
                        {/* <button className="header-button">
                            <a href="" className="header-link"> Keşfet </a>
                        </button> */}
                        <Search/>
                    </div>
                    {/* <div className="header-img-container">
                        <img src={houseImg} className="header-img" alt="Hero Illustration" />
                    </div> */}
                    
                </div>
              
                <div className="header-background-container">
                    <img src={background1} className="header-background" alt="" />
                </div>

            </div>
        </>
    )
}

export default Header;