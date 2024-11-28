import cities from "../../Objects/Cities";
import houseType from "../../Objects/HouseType";
import downArrow from "/down-arrow.png"
import "./Search.scss"
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const Search = () => {

    const [select, setSelect] = useState(["Şehir", "Konut", "Satılık"]);
    const [openDropdown, setDropdownOpen] = useState("");

    const selectedDropdown = (selected) => {
        setDropdownOpen(selected);
    }

    return (
        <div className="search-container">
            <div className="search-content-container">
                <div className="search-inputs-container">
                    <div className="select-dropdown-container">
                        <div onClick={() => selectedDropdown("dropdown1")} className="select-svg-container">
                            <div className="select">
                                <p className="select-p">  {select[0]} </p>
                            </div>
                            <img src={downArrow} className="dropdown-icon" alt="" />
                        </div>
                        <div className={openDropdown === "dropdown1" ? "open-dropdown-div" : "close-dropdown-div"}>
                            <Dropdown setSelect={setSelect} height={"120px"} setDropDownOpen={setDropdownOpen} select={select} index={0} objects={cities} />
                        </div>
                    </div>
                    <div className="select-dropdown-container">
                        <div onClick={() => selectedDropdown("dropdown2")} className="select-svg-container">
                            <div className="select">
                                <p className="select-p">  {select[1]} </p>
                            </div>
                            <img src={downArrow} className="dropdown-icon" alt="" />
                        </div>
                        <div className={openDropdown === "dropdown2" ? "open-dropdown-div" : "close-dropdown-div"}>
                            <Dropdown setSelect={setSelect} height={"120px"} setDropDownOpen={setDropdownOpen} select={select} index={1} objects={houseType} />
                        </div>
                    </div>
                    <div className="select-dropdown-container">
                        <div onClick={() => selectedDropdown("dropdown3")} className="select-svg-container">
                            <div className="select">
                                <p className="select-p">  {select[2]} </p>
                            </div>
                            <img src={downArrow} className="dropdown-icon" alt="" />
                        </div>
                        <div className={openDropdown === "dropdown3" ? "open-dropdown-div" : "close-dropdown-div"}>
                            <Dropdown setSelect={setSelect} setDropDownOpen={setDropdownOpen} select={select} index={2} objects={[{ name: "Satılık", id: 1 }, { name: "Kiralık", id: 2 }]} />
                        </div>
                    </div>
                </div>
                <div className="sarch-button-container">
                    <p className="search-p"> Ara </p>
                </div>
            </div>
            <div className="search-bottom-container">
                <div className="search-bottom-button">
                    <p className="search-button-p"> Yazlıklar  </p>
                </div>
                <div className="search-bottom-button">
                    <p className="search-button-p">
                        Kiralık Daireler
                    </p>
                </div>
                <div className="search-bottom-button">
                    <p className="search-button-p"> Satılık Arsalar </p>
                </div>
            </div>
        </div>
    )
}

export default Search;