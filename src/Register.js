import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault()
        console.log(username, password)
        axios.post("http://localhost:5000/register", {
            username: username,
            password: password
        })
        .then(() => {
            navigate('/login')
        })
        .catch((error) => console.error(error))
    }
    return (
        <div class="h-screen flex justify-center items-center">
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <input type="text" className="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
                <br />
                <input type="text" className="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
