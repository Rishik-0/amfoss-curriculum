import { useState } from "react";
import logo from "../assets/sound-waves.png"
import "./login.css"
import { Link, useNavigate } from "react-router-dom";



function Login({onLoginSuccess}){

    const navigate = useNavigate();

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const handleLogin = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/api/login",{
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({
                username: username,
                password: password
            })
    });


    const data = await response.json()
    console.log(data)

    if (response.ok){
        onLoginSuccess(data.user_id);
        console.log("Success!" + data.message);
        navigate("/home")
    } else {
        alert("Error" + data.message);
    }

    };
    return(
        <div className="Login-container">
            <div className="loginlogo-container">
                <img src={logo} alt = "MeloFi logo" className="loginLogo-image" />
            
                <h3 className="loginlogo-title">MeloFi</h3>
                <h1 className="loginwelcome-back">WELCOME BACK</h1>
            </div>
            <form className="forms">
                <input required name="username" className = "login username" placeholder="Username"  value = {username} onChange={(e) => setUsername(e.target.value)}/>
                <input required type = "password" name="password" className = "login password" placeholder="password" value = {password} onChange={(e) => setPassword((e.target.value))}/>
            </form>

            <div className="login-buttons">
                <button type = "button" className="login-button button-signup" onClick = {handleLogin}>SIGN-IN</button>
                
            
                <Link to='/signup' style={{ textDecoration: 'none',color:"black"}}><button type = "button" className="login-button button-signin">SIGN-UP</button></Link>
                
            </div>
            <h3 className="or">OR</h3>
        </div> 
    );
}

export default Login;