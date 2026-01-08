import logo from "../assets/sound-waves.png"
import "./login.css"
import { Link } from "react-router-dom";


function Login(){
    return(
        <div className="Login-container">
            <div className="loginlogo-container">
                <img src={logo} alt = "MeloFi logo" className="loginLogo-image" />
            
                <h3 className="loginlogo-title">MeloFi</h3>
                <h1 className="loginwelcome-back">WELCOME BACK</h1>
            </div>
            <form className="forms">
                <input name="username" className = "login username" placeholder="Username/Email" />
                <input name="password" className = "login password" placeholder="password" />
            </form>

            <div className="login-buttons">
                <Link to='/home' style={{ textDecoration: 'none',color:"black"}}><button type = "button" className="login-button button-signup" >SIGN-IN</button></Link>
                
            
                <Link to='/signup' style={{ textDecoration: 'none',color:"black"}}><button type = "button" className="login-button button-signin">SIGN-UP</button></Link>
                
            </div>
            <h3 className="or">OR</h3>
        </div>
    );
}

export default Login;