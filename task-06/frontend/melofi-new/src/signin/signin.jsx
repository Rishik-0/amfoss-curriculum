import logo from "../assets/sound-waves.png"
import "./signin.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin(){

    const navigate = useNavigate();

    const[email,setEmail] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[repassword,setrePassword] = useState("");

    const handleSignup = async(e) => {
        if (password === repassword){
            e.preventDefault()
            const response = await fetch("http://127.0.0.1:5000/api/signup",{
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify({
                    email : email,
                    username : username,
                    password : password

                })
            })
            const data = await response.json()
            if(response.ok){
                alert("Account Created Successfullt")
                navigate("/");
            }else{
                alert(data.message)
            }

           }else{
                alert("Passwords donot match!")
            }

    }



    return(
        <div className="Signin-container">
            <div className="signinlogo-container">
                <img src={logo} alt = "MeloFi logo" className="signinLogo-image" />    
                <h3 className="signinlogo-title">MeloFi</h3>
            </div>

            <form className="signinforms">
                <input required name="Email" className = "login Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input required name="Username" className = "login Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input required type="password" name="Password" className = "login password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input required type="password" name="re-enter-password" className = "login re-password" placeholder="Re-enter Password" value={repassword} onChange={(e) => setrePassword(e.target.value)}/>
            </form>

            
                
           <button type = "button" className="signin-button" onClick = {handleSignup}>SIGN-UP</button>
                
            
            
        </div>
    );
}

export default Signin;