// import React from 'react';
import "/src/css/sign.css"
import { useNavigate } from "react-router-dom";

function Signin(){
    const navigate = useNavigate();
    return(
        <div className="outter">
            <div className="signup-form">
                <h1>SignUp</h1>
                <input type='name' id='input' placeholder='FirstName' required />
                <input type='name' id='input' placeholder='LastName' required />
                <input type='email' id='input' placeholder='E-mail' required />
                <input type='text' id='input' placeholder='UserType' required />
                <input type='number' id='input' placeholder='PhoneNo' required />
                <input type='password' id='input' placeholder='Password' required />
                <button type="submit"  onClick={() => navigate("/")}>Register
                </button>
            </div>
        </div>
    )
}
export default Signin;