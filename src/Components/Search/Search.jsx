import cities from "../../Objects/Cities";
import houseType from "../../Objects/HouseType";
import downArrow from "/down-arrow.png"
import "./Search.scss"
import { useState } from "react";
import SearchDropdown from "../Dropdowns/SearchDropdown/SearchDropdown";
import CitiesDropdown from "../Dropdowns/CityDropdown/CitiesDropdown";
import { useRef,useEffect } from "react";

const Search = () => {

    const [select, setSelect] = useState([["Şehir"], ["Konut"], ["Satılık"]]);
    const [openDropdown, setDropdownOpen] = useState("");

    const selectedDropdown = (selected) => {
        setDropdownOpen(selected);
    }

    const dropdownRef1 = useRef(null);
    const dropdownRef2 = useRef(null);
    const dropdownRef3 = useRef(null);

    const handleClickOutside = (event) => {
        if (
          (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) &&
          (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) &&
          (dropdownRef3.current && !dropdownRef3.current.contains(event.target))
        ) {
          setDropdownOpen(""); 
        }
      };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

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
                        <div ref={dropdownRef1} className={openDropdown === "dropdown1" ? "open-dropdown-div" : "close-dropdown-div"}>
                            
                        </div>
                    </div>
                    <div className="select-dropdown-container">
                        <div onClick={() => selectedDropdown("dropdown2")} className="select-svg-container">
                            <div className="select">
                                <p className="select-p">  {select[1]} </p>
                            </div>
                            <img src={downArrow} className="dropdown-icon" alt="" />
                        </div>
                        <div ref={dropdownRef2} className={openDropdown === "dropdown2" ? "open-dropdown-div" : "close-dropdown-div"}>
                            <SearchDropdown  setSelect={setSelect} height={"120px"} setDropDownOpen={setDropdownOpen} select={select} index={1} objects={houseType} />
                        </div>
                    </div>
                    <div className="select-dropdown-container">
                        <div onClick={() => selectedDropdown("dropdown3")} className="select-svg-container">
                            <div className="select">
                                <p className="select-p">  {select[2]} </p>
                            </div>
                            <img src={downArrow} className="dropdown-icon" alt="" />
                        </div>
                        <div ref={dropdownRef3} className={openDropdown === "dropdown3" ? "open-dropdown-div" : "close-dropdown-div"}>
                            <SearchDropdown  setSelect={setSelect} setDropDownOpen={setDropdownOpen} select={select} index={2} objects={[{ name: "Satılık", id: 1 }, { name: "Kiralık", id: 2 }]} />
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