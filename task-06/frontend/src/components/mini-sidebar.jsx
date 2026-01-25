import "./mini-sidebar.css"
// import Sidebar from "./mini-sidebar";
import { MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import MiniSidebarSettings from "./minisidebar-settings";

function MiniSidebar(){
    return(
        <div className="minisidebar-container" >
                <div className="minisidebar-user-profile">
                    <div className="minisidebar-profile-image">
                        <MdPersonOutline size={100} />
                    </div>
                    <div className="minisidebar-username" >User Name</div>
                    <div className="minisidebar-userid">User Id</div>
                </div>
                <div className="minisidebar-options">
                    <Link to='/home'><button className="minisidebar-homepage">
                        <p className="minisidebar-button-desc">Home Page  </p> 
                    </button></Link>
                    <Link to='/playlists'><button className="minisidebar-playlists">
                        <p className="minisidebar-button-desc">Playlists</p>
                    </button></Link>
                    <MiniSidebarSettings/>
                </div>
            </div>
        
    );
}

export default MiniSidebar;