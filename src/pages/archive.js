import { useUser } from "../context/user-context"
import renderNoteCards from "../general-functions/renderNoteCards"

const ArchivePage = () => {

    const {userState : {archives}} = useUser()

    return(
        <div className="padding-l-inline grow-1">
            <h2 className="h-l center-text">Archived Notes</h2>
            <div className="flex align-start gap-xl m3-top padding-l-inline">
                {renderNoteCards(archives)}
            </div>
        </div>
    )
}

export default ArchivePage