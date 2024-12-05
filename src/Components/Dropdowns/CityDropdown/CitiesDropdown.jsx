import "./CitiesDropdown.scss";
import { useState } from "react";
import SearchDropdown from "../SearchDropdown/SearchDropdown";

const CitiesDropdown = ({ color,objects, background, height, setSelect, select, setDropdownOpen, index }) => {
  
  const [citySelect,setCitySelect] = useState(false);
  const toggleSelectObject = (object, isChecked) => {
    setSelect((prev) =>
      prev.map((dropdown, i) =>
        i === index ? isChecked ? [...dropdown, object.name] : dropdown.filter((item) => item !== object.name) : dropdown 
      )
    );
    if (isChecked) {
      setCitySelect(object.towns)
    }
  };

  const isChecked = (name) => select[index]?.includes(name);

  return (
    <div className="dropdown-container" style={{ height: height, background: background }}>
           <div className="search-city-input-container">
            <input type="text" className="search-city-input" />
        </div>
      {
        objects.map((object) => (
          <div key={object.id} className="check-p-container">
            <p style={{ color: color }}  className="dropdown-p" > {object.name} </p>
             <div className="check-svg-container">
               <input type="checkbox" checked={isChecked(object.name)}
              onChange={(e) => toggleSelectObject(object, e.target.checked)}  className="dropdown-checkbox" />
             </div>
          </div>
        ))
      }
      { 
        citySelect && (
          <SearchDropdown setSelect={setSelect} height={"220px"} setDropDownOpen={setDropdownOpen} select={select} index={1} objects={citySelect} />
        )
      }
    </div>
  )
}

export default CitiesDropdown;