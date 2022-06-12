import { useUser } from "../context/user-context"
import NoteEditor from '../components/note-editor'

const Homepage = () => {

    const {userState : {isLoggedIn}} = useUser()

    console.log(isLoggedIn)

    return(
        <div className="w-65 padding-m-inline">
            <NoteEditor />
        </div>
    )
}

export default Homepage