import { useLocation, useNavigate } from "react-router-dom"
import handleLogout from "../auth-functions/handleLogout"
import { useUser } from "../context/user-context"
import SidebarElements from "./sidebar-components/sidebar-elements"

const Sidebar = () => {

    const location = useLocation()

    const {userDispatch} = useUser()

    const navigate = useNavigate()

    return(
        <div className={`${location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/" ? "hide" :""}`}>
            <SidebarElements text = "Homepage" icon = "home" />
            <SidebarElements text = "Archive" icon = "archive" />
            <SidebarElements text = "Trash" icon = "delete" />
            <div className="padding-m">
                <button className="btn btn-error full-width" onClick={() => handleLogout(userDispatch,navigate)}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar