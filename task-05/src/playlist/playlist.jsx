import "./playlist.css"
import Player from "../components/player";
import Sidebar from "../components/sidebar";
import Searchbar from "../components/searchbar";
import logo from "../assets/sound-waves.png";
import Playlisticon from "../components/playlist-icon";
import { FaRegPlayCircle } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import Playlistsongtile from "../components/playlist-songs-tile";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function Playlist(){
    return(
        <div>
            <div className="Playlistpage-content-container">
                <div className="Playlistpage-playlisticon">
                    <Playlisticon/>
                </div>
                <div className="playlistpage-playlistoptions">
                    <p className="playlistoptions-noofsongs">No. of Songs</p>
                    <div className="playlistoptions-icons-container">
                        <div className="playlist-play-option"><FaRegPlayCircle size={28} /></div>
                        <div className="playlist-shuffle-option"><TiArrowShuffle size={28}/></div>
                        <div className="playlist-threedots-option"><BsThreeDotsVertical size={28}/></div>
                    </div>
                </div>
                <div className="playlist-songtiles-container">
                    <Playlistsongtile/>
                    <Playlistsongtile/>
                    <Playlistsongtile/>
                    <Playlistsongtile/>
                    <Playlistsongtile/>
                </div>
                
            </div>
            <div className="playlist-page-topbar">
                <div className="Playlistpage-melofilogo-container">
                    <img src={logo} alt = "MeloFi logo" className="Playlistpage-logo-image" />
                    <h3 className="Playlistpage-logo-name">MeloFi</h3>
                </div>
                <div className="Playlistpage-searchbar">
                    <Searchbar />
                </div>
            </div>
            <div className="playlist-page-components">
                <Sidebar/>
                <Player/>
            </div>
            
        </div>
    );
}

export default Playlist;