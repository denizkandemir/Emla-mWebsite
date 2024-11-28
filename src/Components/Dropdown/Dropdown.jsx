import "./Dropdown.scss";

const Dropdown = ({background,height,setSelect,objects,setDropDownOpen}) => {

    const selectObject = (name) => {
        setSelect(name);
        setDropDownOpen(false);
    }

    return (
      <div className="dropdown-container" >
        {
            objects.map((object)=> (
                <p onClick={() => selectObject(object.name)} className="dropdown-p" key={object.id}> {object.name} </p>
            ))
        }
      </div>
    )
}

export default Dropdown;