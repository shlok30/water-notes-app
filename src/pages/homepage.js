import { useUser } from "../context/user-context"

const Homepage = () => {

    const {userState : {isLoggedIn}} = useUser()

    console.log(isLoggedIn)

    return(
        <h1>Homepage</h1>
    )
}

export default Homepage