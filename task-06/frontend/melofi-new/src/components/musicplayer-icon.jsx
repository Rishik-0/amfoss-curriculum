import "./musicplayer-icon.css"
import image from "./song-cover-images/1.jpg";

function MusicPlayerIcon({song}){
    if (!song) return null;
    return(
        <div className="Musicplayericon-container">
                <img src={song.artworkUrl100.replace('100x100bb', '600x600bb')} alt="Song cover" className="Musicplayersong-cover"/>
                <div className="Musicplayersong-title" >{song.trackName}</div>
                <div className="Musicplayersong-artist">{song.artistName}</div>
        
        </div>
    );
}

export default MusicPlayerIcon;
