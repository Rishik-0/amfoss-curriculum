import "./playlists.css"
import Player from "../components/player";
import Sidebar from "../components/sidebar";
import Searchbar from "../components/searchbar";
import logo from "../assets/sound-waves.png";
import { Link } from "react-router-dom";
import Playlistspagecard from "../components/playlists-page-content";
import { IoMenu } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";

function Playlists({currentSong,isPlaying,onToggle,playlists,onPlaylistcreated,userid}){

    const handlePlaylistscreation = async(e) =>{
        const name = prompt("Enter playlist name:")
        const response = await fetch(`http://127.0.0.1:5000/api/playlists?user_id=${userid}`,{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({
                playlist_name : name,
                user_id : userid
            })
        })
    
    const data = await response.json()
    if (response.ok){
        alert(data.message)
        onPlaylistcreated({id:data.id,name : name})
    }else{
        alert(data.message)
    }
}
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
                {playlists.map((playlist) => (
                   <Playlistspagecard
                   playlist_id = {playlist.id}
                   playlist_name = {playlist.name}
                   /> 
                )
                )}
                
                {/* <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/>
                <Playlistspagecard/> */}
                
            </div>
            
            <div className="playlists-page-components">
                <Sidebar/>
                <Player playlists={playlists} userid={userid} song={currentSong} isPlaying={isPlaying} onToggle={onToggle}/>
            </div>
            
            


            <div className="create-new-playlist-button" onClick={handlePlaylistscreation}><MdAddCircleOutline size={25}/></div>

        </div>
    );
}

export default Playlists;