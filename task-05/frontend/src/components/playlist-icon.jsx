import "./playlist-icon.css"
import image from "./song-cover-images/1.jpg";

function Playlisticon(){
    return(
        <div className="playlisticon-container">
            <img src={image} alt="Song cover" className="playlisticon-cover"/>
            <div className="Playlisticon-name">Playlist Name</div>
        </div>
    )
}
export default Playlisticon;