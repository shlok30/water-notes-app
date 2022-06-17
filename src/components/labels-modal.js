import { useState } from "react"
import { useUser } from "../context/user-context"
import renderModalElements from "../general-functions/renderModalElements"
import ModalElements from "./modal-components/modal-elements"

const LabelsModal = () => {//Ask why class with important wasn't working here?

    const [labelName, setLabelName] = useState("")

    const {userState : {userLabels},userDispatch} = useUser()

    return(
        <div className = "half-width padding-m flex flex-column gap-m light-shadow" style = {{zIndex : "1", position: "absolute" , top : "35%", backgroundColor: "white"}}> 
            <div className="flex space-between">
                <h3 className = "primary-text-colour">Add Labels</h3>
                <p className="cursor-pointer" onClick = {() => userDispatch({type : "MODAL"}) }>X</p>
            </div>
            {renderModalElements(userLabels)}
            <input type = "text" className = "input-field" placeholder="Please Enter New Label Name" value = {labelName} onChange = {(e) => setLabelName(e.target.value)} />
            <div className = "flex gap-m justify-right">
                <button className="btn btn-primary" onClick={() => userDispatch({type : "LABELS", payload : labelName})}>Create New Label</button>
            </div>
        </div>
    )
}

export default LabelsModal