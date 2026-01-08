import logo from "../assets/sound-waves.png"
import "./signin.css"
import { Link } from "react-router-dom";

function Signin(){
    return(
        <div className="Signin-container">
            <div className="signinlogo-container">
                <img src={logo} alt = "MeloFi logo" className="signinLogo-image" />    
                <h3 className="signinlogo-title">MeloFi</h3>
            </div>

            <form className="signinforms">
                <input name="Email" className = "login Email" placeholder="Email" />
                <input name="Username" className = "login Username" placeholder="Username" />
                <input name="Password" className = "login password" placeholder="Password" />
                <input name="re-enter-password" className = "login re-password" placeholder="Re-enter Password" />
            </form>

            
                
           <Link to='/home'><button type = "button" className="signin-button" >SIGN-UP</button></Link>
                
            
            
        </div>
    );
}

export default Signin;