import renderNoteCards from "../general-functions/renderNoteCards"
import { useUser } from "../context/user-context"

const TrashPage = () => {

    const {userState : {trash}} = useUser()

    return(
        <div className="padding-l-inline grow-1">
            <h2 className="h-l center-text">Trash</h2>
            {trash.length === 0 ? <p className="wt-400 text-m primary-text-colour center-text m5-top">No Notes in Trash</p> : null }
            <div className="flex align-start gap-xl m3-top padding-l-inline">
                {renderNoteCards(trash)}
            </div>
        </div>
    )
}

export default TrashPage