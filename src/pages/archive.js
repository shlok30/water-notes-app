import { useUser } from "../context/user-context"
import renderNoteCards from "../general-functions/renderNoteCards"

const ArchivePage = () => {

    const {userState : {archives}} = useUser()

    return(
        <div className="padding-l-inline grow-1">
            <h2 className="h-l center-text">Archived Notes</h2>
            {archives.length === 0 ? <p className="wt-400 text-m primary-text-colour center-text m5-top">No Notes in Archive</p> : null }
            <div className="flex align-start gap-xl m3-top padding-l-inline">
                {renderNoteCards(archives)}
            </div>
        </div>
    )
}

export default ArchivePage