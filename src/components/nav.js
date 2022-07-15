import { useLocation } from "react-router-dom"

const Nav = () => {
    const location = useLocation()

    return(
        <nav className = {`flex space-between full-width ${location.pathname === "/login" || location.pathname === "/signup" ? "hide" : ""}`}>
            <div className = "nav-brand">Water Notes</div>
        </nav>
    )
}

export default Nav