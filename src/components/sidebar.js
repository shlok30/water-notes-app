import SidebarElements from "./sidebar-components/sidebar-elements"

const Sidebar = () => {
    return(
        <div>
            <SidebarElements text = "Homepage" icon = "home" />
            <SidebarElements text = "Archive" icon = "archive" />
            <SidebarElements text = "Trash" icon = "delete" />
        </div>
    )
}

export default Sidebar