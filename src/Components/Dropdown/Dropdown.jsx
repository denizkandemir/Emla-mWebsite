import "./Dropdown.scss";

const Dropdown = ({color,background,height,setSelect,select,objects,setDropDownOpen,index}) => {

    const selectObject = (name) => {
        setSelect(select.map((item, i) => (i === index ? name : item)));
        setDropDownOpen("");
    }

    return (
      <div className="dropdown-container" style={{height:height,background:background }}>
        {
            objects.map((object)=> (
                <p style={{color:color}} onClick={() => selectObject(object.name)} className="dropdown-p" key={object.id}> {object.name} </p>
            ))
        }
      </div>
    )
}

export default Dropdown;