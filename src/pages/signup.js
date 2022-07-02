import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import validateSignupForm from "../auth-functions/validateSignupForm"
import { useAuth } from "../context/auth-context"
import { useUser } from "../context/user-context"

const SignUp = () => {

    const {email, password, confirmPassword, error, setEmail, setPassword, setConfirmPassword, setError} = useAuth()

    const {userDispatch} = useUser()

    const navigate = useNavigate()

    useEffect(() => {
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setError("")
    },[])

    return(
        <div className = "container auth-container center-block m6-top light-border w-35">

            <div className = "primary-text center-text text-m bold">Sign Up</div>
            <div className = "padding-s">
                <label htmlFor="mail" className="input-label">Email Address</label>
                <input type = "email" id = "mail" value = {email} onChange = {(e) => setEmail(e.target.value)} className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}} placeholder="Enter Email" />
            </div>
            
            <div className="padding-s flex flex-column">
                <label htmlFor="password" className="input-label">Enter Password</label>
                <input type = "password" id = "password" value = {password} onChange ={(e) => setPassword(e.target.value)} className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}}  placeholder="Enter Password" />
            </div>
            
            <div className="padding-s flex flex-column">
                <label htmlFor="confirm-password" className="input-label">Confirm Password</label>
                <input type = "password" id = "confirm-password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}}  placeholder="Enter Password" />
            </div>
    
            <button className="btn btn-secondary full-width m2-top" onClick={() => validateSignupForm(email,password,confirmPassword,error,setError,userDispatch,navigate)}>Sign Up</button>

            <p className = "error-text-colour m2-top">{error}</p>
        
        </div>
    )
}

export default SignUp