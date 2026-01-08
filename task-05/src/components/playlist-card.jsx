import "./playlist-card.css"
import image from "./song-cover-images/1.jpg";
import { Link } from "react-router-dom";
function PlaylistCard(){
    return(
        <Link to="/playlist" style={{ textDecoration: 'none',color:"black"}}><div className="playlist-card">
                <img src={image} alt="Song cover" className="playlist-cover"/>
                <div className="playlist-title">Playlist Name</div>
                
        
        </div></Link>
    );
}

export default PlaylistCard;