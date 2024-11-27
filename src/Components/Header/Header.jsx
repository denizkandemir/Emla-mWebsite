import houseImg from "/header-house.png";
import "./Header.scss";
import cities from "../../Objects/Cities";
import houseType from "../../Objects/HouseType";

const Header = () => {
    return (
        <>
            <div className="header-container  center-tablet dark overlay-hero">
                <div className="header-content-container">
                    <div className="header-info-container">
                        <h1 className="header-title"> Emlakçım İle Yeni Bir Hayatın Kapılarını Aralayın! </h1>
                        <p className="header-p">
                            Siz hayal edin, biz bulalım! Modern şehir dairelerinden doğayla iç içe villalara kadar, hayatınıza değer katacak emlak seçeneklerini keşfetmeye hemen başlayın.
                        </p>
                        {/* <button className="header-button">
                            <a href="" className="header-link"> Keşfet </a>
                        </button> */}
                        <div className="header-search-container">
                            <div className="header-search-inputs-container">
                                <select className="header-city-select" name="" value={"Şehir"} id="">
                                    {
                                        cities.map((city) => (
                                            <option className="header-city-option" key={city.id}> {city.name} </option>
                                        ))
                                    }
                                </select>

                                <select className="header-house-type-select" value={"Konut"} name="" id="">
                                {
                                        houseType.map((type) => (
                                            <option className="header-house-type-option" key={type.id}> {type.name} </option>
                                        ))
                                }
                                </select>

                                <select className="header-house-sell-select" value={"Konut"} name="" id="">                             
                                    <option className="header-house-sell-option"> Satılık </option> 
                                    <option className="header-house-sell-option"> Kiralık </option>                    
                                </select>

                                <div className="header-sarch-button-container">
                                    <p className="header-searc-p"> Ara </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-img-container">
                        <img src={houseImg} className="header-img" alt="Hero Illustration" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;