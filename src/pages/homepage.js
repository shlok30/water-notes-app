import { useUser } from "../context/user-context"
import NoteEditor from '../components/note-editor'
import renderNoteCards from "../general-functions/renderNoteCards"
import LabelsModal from "../components/labels-modal"
import OperationsComponent from "../components/operations"
import { useOperations } from "../context/operations-context"
import labelsFilter from "../general-functions/labelsFilter"
import getNotesSorted from "../general-functions/getNotesSorted"

const Homepage = () => {

    const {userState : {notes,isModalActive}} = useUser()

    const {operationsState : {labelFilters,sorting}} = useOperations()

    const filteredNotesByLabels = labelsFilter(notes,labelFilters)

    const notesSortedByPriority = sorting.name ? getNotesSorted(filteredNotesByLabels,sorting) : [...filteredNotesByLabels]

    return(
        <div className="grow-1 padding-m-inline">
            <div className="container flex flex-center relative">
                <NoteEditor />
                {isModalActive ? <LabelsModal /> : null}
            </div>
            <OperationsComponent />
            <h3 className="h-m padding-l-inline">Notes</h3>
            <div className="flex align-start gap-xl m3-top padding-l-inline">
                {renderNoteCards(notesSortedByPriority)}
            </div>
        </div>
    )
}

export default Homepage