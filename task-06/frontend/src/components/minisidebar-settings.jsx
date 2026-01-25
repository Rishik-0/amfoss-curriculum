import { useState } from "react";
import "./minisidebar-settings.css"
import { Link } from "react-router-dom";

function MiniSidebarSettings(){
    const[open,setopen] = useState(false);

    let dropdown = null;
    if (open){
        dropdown = (
            <div className="settings-dropdown-minisidebar">
                <Link to="/"><button className="logout-button-minisidebar">
                    Logout
                </button></Link>
            </div>
        );
    }
    return(
        <div className="settings-minisidebar-container">
            <button className="settings-minisidebar-button" onClick={() => setopen((prev) => !prev)}>
                Settings
            </button>
            {dropdown}
        </div>
    );
}
export default MiniSidebarSettings;