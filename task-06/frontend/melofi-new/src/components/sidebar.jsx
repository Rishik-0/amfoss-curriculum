import "./sidebar.css"
import { MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import SettingsSidebar from "./settings-sidebar";
import {IoMenu} from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import MiniSidebar from "./mini-sidebar";
function Sidebar(){

    const[isOpen,setIsOpen] = useState(false)
    // if (isOpen){
    //     return(
    //         <div>Hi</div>
    //     )
    // }
    return(
        <div className="outersidebar-container">
            <div className="sidebar-container" >
                <div className="sidebar-user-profile">
                    <div className="sidebar-profile-image">
                        <MdPersonOutline size={100} />
                    </div>
                    <div className="sidebar-username" >User Name</div>
                    <div className="sidebar-userid">User Id</div>
                </div>
                <div className="sidebar-options">
                    <Link to='/home'><button className="sidebar-homepage">
                        <p className="sidebar-button-desc">Home Page  </p> 
                    </button></Link>
                    <Link to='/playlists'><button className="sidebar-playlists">
                        <p className="sidebar-button-desc">Playlists</p>
                    </button></Link>
                    <SettingsSidebar/>
                    {/* <button className="sidebar-settings" >
                        <p className="sidebar-button-desc">Settings</p>
                    </button> */}
                    
                </div>
                

            </div>
        <div className="mobile-sidebar-disp">             
            <button className="mini-menu-icon" onClick={() => setIsOpen(prev => (!prev))}>
                {isOpen ? (<>
                <IoIosClose size={28}/>
                
                
                </> ): (<IoMenu size={28}/>)}                        
            </button>
            {isOpen && <MiniSidebar />}
        </div>   
        
            


        </div>

    );
}

export default Sidebar;