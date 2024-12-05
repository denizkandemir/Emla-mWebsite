import "./SearchDropdown.scss";

const SearchDropdown = ({color,background,height,setSelect,select,objects,setDropDownOpen,index}) => {
  const toggleSelectObject = (name, isChecked) => {
    setSelect((prev) =>
      prev.map((dropdown, i) =>
        i === index ? isChecked ? [...dropdown, name] : dropdown.filter((item) => item !== name) : dropdown 
      )
    );
  };

  const isChecked = (name) => select[index]?.includes(name);

  return (
    <div className="dropdown-container" style={{ height, background }}>
      {objects.map((object) => (
        <div key={object.id} className="check-p-container">
          <p style={{ color }} className="dropdown-p">
            {object.name}
          </p>
          <div className="check-svg-container">
            <input
              type="checkbox"
              checked={isChecked(object.name)}
              onChange={(e) => toggleSelectObject(object.name, e.target.checked)}
              className="dropdown-checkbox"
            />
          </div>
        </div>
      ))}
    </div>
  );
};



export default SearchDropdown;