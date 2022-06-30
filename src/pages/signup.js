
const SignUp = () => {
    return(
        <div className = "container auth-container center-block m6-top light-border w-35">

            <div className = "primary-text center-text text-m bold">Sign Up</div>
            <div className = "padding-s">
                <label htmlFor="demo" className="input-label">Email Address</label>
                <input type = "email" id = "demo" className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}} placeholder="Enter Email" />
            </div>
            
            <div className="padding-s flex flex-column">
                <label htmlFor="demo1" className="input-label">Enter Password</label>
                <input type = "password" id = "demo1" className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}}  placeholder="Enter Password" />
            </div>
            
            <div className="padding-s flex flex-column">
                <label htmlFor="demo1" className="input-label">Confirm Password</label>
                <input type = "password" id = "demo1" className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}}  placeholder="Enter Password" />
            </div>
    
            <button className="btn btn-secondary full-width m2-top">Sign Up</button>
        
        </div>
    )
}

export default SignUp