import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/auth.contexts"

const NavBar = () => {
    const {isLoggedIn,logOutUser,setMessage} = useContext(AuthContext)
    return (
        <div>
            <Link to='/' onClick={() => setMessage('')}><h2>Home</h2></Link>
            <Link to='/create' onClick={() => setMessage('')}><h2>Create</h2></Link>
            <Link to='/read' onClick={() => setMessage('')}><h2>Read</h2></Link>
            <Link to='/update' onClick={() => setMessage('')}><h2>Update</h2></Link>
            <Link to='/delete' onClick={() => setMessage('')}><h2>Delete</h2></Link>
            {isLoggedIn && (
                <>
                    <button to='/logout' onClick={() => logOutUser()}><h3>Log Out</h3></button>
                </>
            )}
            {!isLoggedIn && (
                <>
                    <Link to='/login' onClick={() => setMessage('')}><h2>Login</h2></Link>
                    <Link to='/register' onClick={() => setMessage('')}><h2>Register</h2></Link>
                </>
            )}
        </div>
    )
}

export default NavBar