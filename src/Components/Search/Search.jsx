import cities from "../../Objects/Cities";
import houseType from "../../Objects/HouseType";
import downArrow from "/down-arrow.png"
import "./Search.scss"
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const Search = () => {

    const [select,SetSelect] = useState([ "Şehir" , "Konut" , "Satılık"]);
    const [isOpenDropdown,setDropdownOpen] = useState(false);

    const openDropdown = () => {
        setDropdownOpen(true);
    }

    return (
        <div className="search-container">
            <div className="search-content-container">
                <div className="search-inputs-container">
                    <div  onClick={()=> openDropdown()} className="select-svg-container">
                        <div className="select">
                            <p className="select-p">  {select[0]} </p>
                        </div>
                        <img src={downArrow} className="dropdown-icon" alt="" />
                        <div className={isOpenDropdown ? "open-dropdown-div" : "close-dropdown-div"}>
                            <Dropdown setSelect={SetSelect} objects={cities}/>
                        </div>
                    </div>

                    <div className="border-div"></div>

                    <div onClick={()=> openDropdown()} className="select-svg-container">
                        <div className="select">
                            <p className="select-p">  {select[1]} </p>
                        </div>
                        <img src={downArrow} className="dropdown-icon" alt="" />
                        <div className={isOpenDropdown ? "open-dropdown-div" : "close-dropdown-div"}>
                            <Dropdown setSelect={SetSelect}  objects={houseType}/>
                        </div>
                    </div>

                    <div className="border-div"></div>

                    <div  onClick={()=> openDropdown()} className="select-svg-container">
                        <div className="select" >
                         <p className="select-p">  {select[2]} </p>
                        </div>
                        <img src={downArrow} className="dropdown-icon" alt="" />
                        <div className={isOpenDropdown ? "open-dropdown-div" : "close-dropdown-div"}>
                            <Dropdown setSelect={SetSelect} objects={[{name:"Satılık",id:1} , {name:"Kiralık",id:2}]}/>
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