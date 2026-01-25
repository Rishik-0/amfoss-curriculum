import { useState } from "react";
import "./settings-sidebar.css"
import { Link } from "react-router-dom";

function SettingsSidebar(){
    const[open,setopen] = useState(false);

    let dropdown = null;
    if (open){
        dropdown = (
            <div className="settings-dropdown-sidebar">
                <Link to="/"><button className="logout-button-sidebar">
                    Logout
                </button></Link>
            </div>
        );
    }
    return(
        <div className="settings-sidebar-container">
            <button className="settings-sidebar-button" onClick={() => setopen((prev) => !prev)}>
                Settings
            </button>
            {dropdown}
        </div>
    );
}
export default SettingsSidebar;