import cities from "../../Objects/Cities";
import houseType from "../../Objects/HouseType";
import downArrow from "/down-arrow.png"
import "./Search.scss"

const Search = () => {
    return (
        <div className="header-search-container">
            <div className="header-search-inputs-container">
                <div className="select-svg-container">
                    <select className="header-select" name="" value={"Şehir"} id="">
                        {
                            cities.map((city) => (
                                <option className="header-city-option" key={city.id}> {city.name} </option>
                            ))
                        }
                    </select>
                    <img src={downArrow} className="dropdown-icon" alt="" />
                </div>

                <div className="border-div"></div>

                <div className="select-svg-container">
                    <select className="header-select" value={"Konut"} name="" id="">
                        {
                            houseType.map((type) => (
                                <option className="header-house-type-option" key={type.id}> {type.name} </option>
                            ))
                        }
                    </select>
                    <img src={downArrow} className="dropdown-icon" alt="" />
                </div>

                <div className="border-div"></div>

                <div className="select-svg-container">
                    <select className="header-select" value={"Konut"} name="" id="">
                        <option className="header-house-sell-option"> Satılık </option>
                        <option className="header-house-sell-option"> Kiralık </option>
                    </select>
                    <img src={downArrow} className="dropdown-icon" alt="" />
                </div>
            </div>
            <div className="header-sarch-button-container">
                <p className="header-searc-p"> Ara </p>
            </div>
        </div>
    )
}

export default Search;