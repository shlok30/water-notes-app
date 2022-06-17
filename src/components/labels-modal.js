import ModalElements from "./modal-components/modal-elements"

const LabelsModal = () => {//Ask why class with important wasn't working here?
    return(
        <div className = "half-width padding-m flex flex-column gap-m light-shadow" style = {{zIndex : "1", position: "absolute" , top : "35%", backgroundColor: "white"}}> 
            <h3 className = "primary-text-colour">Add Labels</h3>
            <ModalElements />
            <ModalElements />
            <ModalElements />
            <input type = "text" className = "input-field" placeholder="Please Enter New Label Name" />
            <div className = "flex gap-m justify-right">
                <button className="btn btn-primary">Create New Label</button>
            </div>
        </div>
    )
}

export default LabelsModal