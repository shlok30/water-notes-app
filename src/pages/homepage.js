import { useUser } from "../context/user-context"
import NoteEditor from '../components/note-editor'

const Homepage = () => {

    const {userState : {isLoggedIn}} = useUser()

    console.log(isLoggedIn)

    return(
        <div className="grow-1 padding-m-inline light-border">
            <div className="container center-block flex flex-center light-border">
                <NoteEditor />
            </div>
        </div>
    )
}

export default Homepage