import handleSignup from "./handleSignup"

const validateSignupForm = (email,password,confirmPassword,error,setError,userDispatch,navigate) => {

    if(email && password && confirmPassword){
       
        password === confirmPassword ? handleSignup(email,password,userDispatch,navigate,setError,error) : setError("Passwords don't match")
    
    }
    else{

        setError("Please enter all input fields")
        
    }

}

export default validateSignupForm

