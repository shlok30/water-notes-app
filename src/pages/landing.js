import { useNavigate } from "react-router-dom"

const LandingPage = () => {

    const navigate = useNavigate()

    return(
        <div className="full-width vh-50 flex flex-column flex-center">
            <h1 className = "h-xl wt-700 primary-text-colour padding-m">Water Notes</h1>
            <p className="wt-400 text-m padding-m">A Lightweight Note Taking app for all your personal and professional needs</p>
            <button class="btn btn-secondary m3-top" onClick = {() => navigate("/login")}>Get Started</button>
        </div>
    )
}

export default LandingPage