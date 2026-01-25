import "./playlist-card.css"
import image from "./song-cover-images/1.jpg";
import { Link } from "react-router-dom";
function PlaylistCard({playlist_name,playlist_id}){
    return(
        <Link to={`/playlist/${playlist_id}`} style={{ textDecoration: 'none',color:"black"}}><div className="playlist-card">
                <img src={image} alt="Song cover" className="playlist-cover"/>
                <div className="playlist-title">{playlist_name}</div>
                
        
        </div></Link>
    );
}

export default PlaylistCard;