import { useLocation } from "react-router-dom"
import SidebarElements from "./sidebar-components/sidebar-elements"

const Sidebar = () => {

    const location = useLocation()

    return(
        <div className={`${location.pathname === "/login" ? "hide" :""} full-height`}>
            <SidebarElements text = "Homepage" icon = "home" />
            <SidebarElements text = "Archive" icon = "archive" />
            <SidebarElements text = "Trash" icon = "delete" />
        </div>
    )
}

export default Sidebar