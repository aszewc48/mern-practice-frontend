import { useEffect,useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../contexts/auth.contexts"

const Register = () => {
    const navigate = useNavigate()
    const {setIsLoading,setMessage} = useContext(AuthContext)
    const [state,setState] = useState({
        email: '',
        username: '',
        password: ''
    })
    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
    })
    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault()
        if(state.username.length < 4) {
            setMessage("username must be at least four characters")
            setIsLoading(false)
            return
        }
        if(state.password.length < 6) {
            setMessage("password must be at least 6 characters")
            setIsLoading(false)
            return
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, state)
            .then(res => {
                console.log(res.data)
                navigate('/login')
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type='email' name="email" value={state.email} onChange={updateState} />
                </div>
                <div>
                    <label>Username</label>
                    <input name="username" value={state.username} onChange={updateState} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={state.password} onChange={updateState} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register