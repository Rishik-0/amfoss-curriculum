import "./music-card.css"
import image from "./song-cover-images/1.jpg";

function MusicCard(){
    return(
        <div className="music-card">
                <img src={image} alt="Song cover" className="song-cover"/>
                <div className="song-title">Song Name</div>
                <div className="song-artist">Artist</div>
        
        </div>
    );
}

export default MusicCard;