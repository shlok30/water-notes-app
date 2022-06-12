import { useUser } from "../context/user-context"
import NoteEditor from '../components/note-editor'
import renderNoteCards from "../general-functions/renderNoteCards"

const Homepage = () => {

    const {userState : {isLoggedIn,notes}} = useUser()

    console.log(isLoggedIn)

    return(
        <div className="grow-1 padding-m-inline">
            <div className="container center-block flex flex-center">
                <NoteEditor />
            </div>
            <h3 className="h-m padding-l-inline">Notes</h3>
            <div className="flex align-start gap-xl m3-top padding-l-inline">
                {renderNoteCards(notes)}
            </div>
        </div>
    )
}

export default Homepage