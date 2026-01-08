import "./playlists-page-content.css"
import image from "./song-cover-images/1.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

function Playlistspagecard(){
    return(
        
       <div className="outer-playlist-card-div">
            <div className="Playlistpage-card-container">
                <Link to='/playlist' style={{ textDecoration: 'none',color:"black"}}>
                <div className="Playlist-link-div">
                    <img src={image} alt="Song cover" className="playlist-cover"/>
                    <p className="Playlistcard-name">Playlist Name</p>
                    <p className="Playlistcard-num-songs">Number of Songs</p>
                </div></Link>
                <div className="Playlistcard-three-dots">
                    <BsThreeDotsVertical size={25}/>
                </div>
            </div>
        </div>
    );
}

export default Playlistspagecard;