import "./playlists.css"
import Player from "../components/player";
import Sidebar from "../components/sidebar";
import Searchbar from "../components/searchbar";
import logo from "../assets/sound-waves.png";
import { Link } from "react-router-dom";
import Playlistspagecard from "../components/playlists-page-content";
import { IoMenu } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";

function Playlists(){
    return(
        <div> 
            
            <div className="playlists-page-topbar">
                <div className="Playlistspage-melofilogo-container">
                    <img src={logo} alt = "MeloFi logo" className="Playlistspage-logo-image" />
                    <h3 className="Playlistspage-logo-name">MeloFi</h3>
                </div>
                <div className="Playlistspage-searchbar">
                    <Searchbar />
                </div>
            </div>
            
            <div className="Playlistspage-content-container">
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                
            </div>
            
            <div className="playlists-page-components">
                <Sidebar/>
                <Player/>
            </div>
            
            


            <div className="create-new-playlist-button"><MdAddCircleOutline size={25}/></div>

        </div>
    );
}

export default Playlists;