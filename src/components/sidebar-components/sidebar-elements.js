
const SidebarElements = ({icon,text}) => {
    return(
        <div className = "flex gap-xl padding-m cursor-pointer">
    	    <i className="material-icons cursor-pointer primary-text-colour" >{icon}</i>
            <p className = "primary-text-colour">{text}</p>
        </div>
    )
}

export default SidebarElements