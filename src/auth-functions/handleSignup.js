import axios from "axios";

const handleSignup = (email,password,userDispatch,navigate,setError,error) => {

    axios
     .post("/api/auth/signup",{email, password})
     .then(res => {
        localStorage.setItem("userToken",res.data.encodedToken)
        userDispatch({type : "LOGIN", payload : res.data.createdUser})
        if(error){
            setError("")
        }
        navigate("/homepage")
     })
     .catch(err => setError(err.response.data.errors))

}

export default handleSignup