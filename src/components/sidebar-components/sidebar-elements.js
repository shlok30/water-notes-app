import {NavLink} from "react-router-dom"

const SidebarElements = ({icon,text}) => {
    return(
        <div className = "flex gap-xl padding-m cursor-pointer">
    	    <i className="material-icons cursor-pointer primary-text-colour" >{icon}</i>
            <NavLink className = "primary-text-colour" style = {({isActive}) => ({color : isActive ? "red" : ""})}  to = {`/${text.toLowerCase()}`}>{text}</NavLink>
        </div>
    )
}

export default SidebarElements