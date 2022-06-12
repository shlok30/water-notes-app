
const LoginPage = () => {
    return(
    
        <div className = "container auth-container center-block m6-top light-border w-35">

            <div className = "primary-text center-text text-m bold">Login</div>
            <div className = "padding-s">
                <label htmlFor="demo" className="input-label">Email Address</label>
                <input type = "email" id = "demo" className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}} placeholder="Enter Email" />
            </div>
            
            <div className="padding-s flex flex-column">
                <label htmlFor="demo1" className="input-label">Enter Password</label>
                <input type = "password" id = "demo1" className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}}  placeholder="Enter Password" />
            </div>
            
    
            <div className = "padding-s-block m2-top flex space-between">
                <div className="flex gap-m align-center">
                    <input type = "checkbox" />
                    <p>Remember Me</p>
                </div>
                <a href="" className = "primary-text">Forgot Password</a>
            </div>

            <button className="btn btn-secondary full-width m2-top">Login</button>
            <button className="btn btn-success full-width m2-top">Guest Login</button>
            <div className = "m2-top">
                <a href="" className = "primary-text">Create New Account?</a>
            </div>
        </div>
    )
}

export default LoginPage