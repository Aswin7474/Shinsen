import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        axios.post("http://localhost:5000/register", {
            username: username,
            password: password
        })
        .then(() => {
            navigate("/")
        })
        .catch(() => console.error("Something went wrong"))
        
    }


    return (
        <div class="h-screen flex justify-center items-center">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type="text" className="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
                <br />
                <input type="text" className="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
