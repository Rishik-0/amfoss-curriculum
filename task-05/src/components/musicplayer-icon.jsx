import "./musicplayer-icon.css"
import image from "./song-cover-images/1.jpg";

function MusicPlayerIcon(){
    return(
        <div className="Musicplayericon-container">
                <img src={image} alt="Song cover" className="Musicplayersong-cover"/>
                <div className="Musicplayersong-title">Song Name</div>
                <div className="Musicplayersong-artist">Artist</div>
        
        </div>
    );
}

export default MusicPlayerIcon;
