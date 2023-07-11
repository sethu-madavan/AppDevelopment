// import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "/css/log.css"
import "/src/css/log.css"

function Login(){

    const navigate = useNavigate();
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const saveUsername = (event) =>{
        setUsername(event.target.value);
    };

    const savePassword = (event) =>{
        setPassword(event.target.value);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(username);
        console.log(password);
    }

    return(
        <div className="down">
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <input id="box" type="username" value={username} onChange={saveUsername} placeholder="Username" required />
                    <br></br>
                    <input id="box" type="password" value={password} onChange={savePassword} placeholder="passcode" required/>
                    <button type="submit" onClick={() => navigate("./Dashboard")} onChange={onSubmit} >Login</button>
                    <a href="/signIn">Register?click here</a>
                </form>
                </div>
        </div>
    );
}

export default Login;