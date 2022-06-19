import { useNotes } from "../../context/notes-context"

const ModalElements = ({label}) => {

    const {notesState : {labels},notesDispatch} = useNotes()

    console.log("Labels from notes state ",labels)

    const labelHandler = () => {
        let tempCopyOfLabels
        if(!labels.includes(label)){
            tempCopyOfLabels = [...labels]
            tempCopyOfLabels.push(label)
            notesDispatch({type : "LABELS", payload : tempCopyOfLabels})
        }
        else{
            tempCopyOfLabels = labels.filter(labelElement => labelElement !== label)
            notesDispatch({type : "LABELS", payload : tempCopyOfLabels})

        }
    }

    return(
        <div className={`flex gap-m align-center ${label === "None" ? "hide" : ""}`}>
            <input type = "checkbox" onChange={labelHandler} checked = {labels.includes(label)} />
            <p>{label}</p>
        </div>
    )
}

export default ModalElements